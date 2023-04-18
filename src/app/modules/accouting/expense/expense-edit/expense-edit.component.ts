import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styles: [
  ]
})
export class ExpenseEditComponent {
  expenseFormGroup = new FormGroup({
    name: new FormControl<string | null>(null),
    supplier: new FormControl<string | null>(null),
    price: new FormControl<number | null>(null),
    state: new FormControl<string | null>(null),
  });

  proofPreviewImage!: string;

  selectProofImage(event: any): void {
    const file = event.target.files[0];
    this.setProofPreviewImage(file, new FileReader);
  }

  setProofPreviewImage(file: File, fileReader: FileReader): void {
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      this.proofPreviewImage = fileReader.result as string;
    };
  }

  submitExpense(): void {
    console.log(this.expenseFormGroup.value);
  }
}
