import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, Supplier, Category, Product } from '../../shared/accouting.types';
import { map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styles: [
  ]
})
export class PurchaseEditComponent implements OnInit {
  purchaseFormGroup = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    purchasePrice: new FormControl<number | null>(null, Validators.required),
    salePrice: new FormControl<number | null>(null),
    quantity: new FormControl<number | null>(null, Validators.required),
    category: new FormControl<Category | null>(null, Validators.required),
    supplier: new FormControl<Supplier | null>(null, Validators.required),
    storage: new FormControl<Storage | null>(null, Validators.required),
  });

  private supliers: Supplier[] = [];
  filteredSuppliers: Supplier[] = [];
  lastCreatedCategory!: Category;

  canDisplaylastCreatedCategory: boolean = false;
  canDisplayCreateSupplierButton: boolean = false;
  canDisplayCreateCategoryButton: boolean = false;

  constructor(
    private accountingService: AccountingService
  ) {}

  public ngOnInit(): void {
    this.accountingService.suppliers$.subscribe(suppliers => {
      this.supliers = suppliers;
    this.purchaseFormGroup.controls.supplier.valueChanges.pipe(
      startWith(''),
      map(supplier => typeof supplier === 'string' ? supplier : supplier?.name),
      map((supplierName) => {
        const filteredSuppliers: Supplier[] = this.supliers.filter(
          supplier => supplier.name?.toLocaleLowerCase().includes(supplierName?.toLocaleLowerCase() as string)
        );

        this.canDisplayCreateSupplierButton = filteredSuppliers.some(supplier => supplier.name !== supplierName) && supplierName !== '';

        return filteredSuppliers;
      }),
    ).subscribe(filteredSuppliers => {
      this.filteredSuppliers = filteredSuppliers;
    });

    this.accountingService.category$.subscribe(category => {
      this.lastCreatedCategory = category;
    });

    this.purchaseFormGroup.controls.category.valueChanges.pipe(
      startWith(''),
      map(category => typeof category === 'string' ? category : category?.name),
      tap((categoryName) => {
        if (this.lastCreatedCategory) {
          this.canDisplayCreateCategoryButton = this.lastCreatedCategory.name !== categoryName &&  categoryName !== '';
  
          this.canDisplaylastCreatedCategory = 
            this.lastCreatedCategory.name?.toLocaleLowerCase()
            .includes(categoryName?.toLocaleLowerCase() as string) as boolean;
          
        } else {
          this.canDisplayCreateCategoryButton = categoryName != '';
        }
      }),
    ).subscribe();

    this.accountingService.storages$.subscribe(storages => {
      this.storages = storages;
    });
  }

  displayCategoryName(category: Category): string {
    return category ? category.name as string : '';
  }

  public createCategory(): void {
    const category: Category = {
      name: this.purchaseFormGroup.value.category as string
    };

    this.accountingService.createCategory(category).subscribe((category) => {
      this.purchaseFormGroup.patchValue({
        category: category
      });
    })
  }

  displaySupplierName(supplier: Supplier): string {
    return supplier ? supplier.name as string : '';
  }

  public createSupplier(): void {
    const supplier: Supplier = {
      name: this.purchaseFormGroup.value.supplier as string
    };

    this.accountingService.createSupplier(supplier).subscribe((supplier) => {
      this.purchaseFormGroup.patchValue({
        supplier: supplier
      });
    });
  }

  purchase(): void {
    const product: Product = {
      name: this.purchaseFormGroup.value.name as string,
      category: this.purchaseFormGroup.value.category as Category,
      quantity: this.purchaseFormGroup.value.quantity as number,
      price: this.purchaseFormGroup.value.purchasePrice as number,
      sellingPrice: this.purchaseFormGroup.value.salePrice as number,
      supplier: this.purchaseFormGroup.value.supplier as Supplier,
      storage: this.purchaseFormGroup.value.storage as Storage,
    };

    this.accountingService.createProduct(product).subscribe(console.log);
  }
}
