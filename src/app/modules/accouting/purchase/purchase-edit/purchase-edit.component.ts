import { AccountingService } from './../../shared/accounting.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, Supplier, Category, Product } from '../../shared/accouting.types';
import { Subject, map, startWith, tap, takeUntil } from 'rxjs';
import { Purchase, PurchasePaymentMethod, PurchaseType } from '../purchase.type';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOptionsDialogComponent } from '../../shared/components/purchase-options-dialog/purchase-options-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styles: [
  ]
})
export class PurchaseEditComponent implements OnInit, OnDestroy {
  purchaseFormGroup = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    purchasePrice: new FormControl<number | null>(null, Validators.required),
    salePrice: new FormControl<number | null>(null),
    quantity: new FormControl<number | null>(null, Validators.required),
    category: new FormControl<Category | null>(null, Validators.required),
    supplier: new FormControl<Supplier | null>(null, Validators.required),
    storage: new FormControl<Storage | null>(null, Validators.required),
  });

  storages: Storage[] = [];
  lastCreatedCategory!: Category;
  products: Product[] = [];
  purchaseType!: PurchaseType;
  paymentMethods$: Observable<PurchasePaymentMethod[]> = this.accountingService.purchasePaymentMethods$;

  canDisplaylastCreatedCategory: boolean = false;
  canDisplayCreateCategoryButton: boolean = false;

  private unsubscriber: Subject<any> = new Subject();

  constructor(
    private accountingService: AccountingService,
    private dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.openPurchaseOptionsDialog();

    this.accountingService.category$.subscribe(category => {
      this.lastCreatedCategory = category;
    });

    this.purchaseFormGroup.controls.category.valueChanges.pipe(
      takeUntil(this.unsubscriber),
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

  openPurchaseOptionsDialog(): void {
    const dialogRef: MatDialogRef<PurchaseOptionsDialogComponent, PurchaseType> = this.dialog.open(PurchaseOptionsDialogComponent, { 
      disableClose: true,
      width: '400px' 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.purchaseType = result as PurchaseType
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

  addProduct(): void {
    const product: Product = {
      name: this.purchaseFormGroup.value.name as string,
      category: this.purchaseFormGroup.value.category as Category,
      quantity: this.purchaseFormGroup.value.quantity as number,
      price: this.purchaseFormGroup.value.purchasePrice as number,
      sellingPrice: this.purchaseFormGroup.value.salePrice as number,
      supplier: this.purchaseFormGroup.value.supplier as Supplier,
      storage: this.purchaseFormGroup.value.storage as Storage,
    };

    this.products?.push(product);

    const { category, supplier } = this.purchaseFormGroup.value;

    this.purchaseFormGroup.reset({ category, supplier });
  }

  purchase(): void {
    const purchase: Purchase = {
      type: this.purchaseType,
      category: this.purchaseFormGroup.value.category as Category,
      supplier: this.purchaseFormGroup.value.supplier as Supplier,
      products: this.products,
    }
    
    this.accountingService.createPurchase(purchase).subscribe(console.log);

    this.purchaseFormGroup.reset();
    this.products = [];
  }

  public ngOnDestroy(): void {
    this.unsubscriber.next(null);
    this.unsubscriber.complete();
  }
}
