import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, Supplier, Category, Product } from '../../shared/accouting.types';

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
    })
  }

  displaySupplierName(supplier: Supplier): string {
    return supplier ? supplier.name as string : '';
  }

  purchase(): void {
    console.log(this.purchaseFormGroup.value);
  }
}
