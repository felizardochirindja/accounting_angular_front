import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styles: [
  ]
})
export class PurchaseEditComponent {
  purchaseFormGroup = new FormGroup({
    name: new FormControl<string | null>(null),
    purchasePrice: new FormControl<number | null>(null),
    salePrice: new FormControl<number | null>(null),
    quantity: new FormControl<number | null>(null),
    category: new FormControl<string | null>(null),
    supplier: new FormControl<string | null>(null),
    storage: new FormControl<string | null>(null),
  });

  purchase(): void {
    console.log(this.purchaseFormGroup.value);
  }
}
