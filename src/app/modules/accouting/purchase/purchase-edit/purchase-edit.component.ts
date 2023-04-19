import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styles: [
  ]
})
export class PurchaseEditComponent {
  purchaseFormGroup = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    purchasePrice: new FormControl<number | null>(null, Validators.required),
    salePrice: new FormControl<number | null>(null),
    quantity: new FormControl<number | null>(null, Validators.required),
    category: new FormControl<string | null>(null, Validators.required),
    supplier: new FormControl<string | null>(null, Validators.required),
    storage: new FormControl<string | null>(null, Validators.required),
  });

  supliers: string[] = [
    'fornecedor 1',
    'fornecedor 2',
    'fornecedor 3',
  ];

  storages: string[] = [
    'armazem 1',
    'armazem 2',
  ];

  purchase(): void {
    console.log(this.purchaseFormGroup.value);
  }
}
