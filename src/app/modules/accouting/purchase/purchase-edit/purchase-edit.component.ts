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

  supliers: Supplier[] = [];

  storages: string[] = [
    'armazem 1',
    'armazem 2',
  ];

  constructor(
    private accountingService: AccountingService
  ) {}

  public ngOnInit(): void {
    this.accountingService.suppliers$.subscribe(suppliers => {
      this.supliers = suppliers;
    })
  }

  purchase(): void {
    console.log(this.purchaseFormGroup.value);
  }
}
