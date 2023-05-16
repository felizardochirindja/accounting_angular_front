import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-options-dialog',
  templateUrl: './purchase-options-dialog.component.html',
})
export class PurchaseOptionsDialogComponent {
  selectedOption!: { name: string };

  purchaseOptions: { name: string }[] = [
    { name: 'mercadorias' },
    { name: 'consumiveis' },
    { name: 'bens' },
  ];
}
