import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-options-dialog',
  templateUrl: './purchase-options-dialog.component.html',
})
export class PurchaseOptionsDialogComponent {
  selectedPurchaseType!: string[];
  dialogRef: MatDialogRef<PurchaseOptionsDialogComponent> = inject(MatDialogRef<PurchaseOptionsDialogComponent>);

  purchaseTypes: string[] = [
    'mercadorias',
    'consumiveis',
    'bens',
  ];

  closeDialog() {
    if (this.selectedPurchaseType.length === 0) {
      throw new Error('No purchase type selected.'); 
    }

    this.dialogRef.close(this.selectedPurchaseType[0]);
  }
}
