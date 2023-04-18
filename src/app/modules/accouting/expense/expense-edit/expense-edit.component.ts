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

  submitExpense(): void {
    console.log(this.expenseFormGroup.value);
  }
}
