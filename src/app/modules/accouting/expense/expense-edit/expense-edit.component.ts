import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense, Supplier, Tax } from '../../shared/accouting.types';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styles: [
  ]
})
export class ExpenseEditComponent implements OnInit {
  expenseFormGroup = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    supplier: new FormControl<Supplier | null>(null, Validators.required),
    price: new FormControl<number | null>(null, Validators.required),
    tax: new FormGroup({
      tax: new FormControl<Tax | null>(null, Validators.required),
      value: new FormControl<number | null>(null, Validators.required),
    }),
  });

  proofPreviewImage!: string;

  taxes: Tax[] = [];
  
  constructor(
    private accountingService: AccountingService
  ) {}

  public ngOnInit(): void {
    this.accountingService.taxes$.subscribe(taxes => {
      this.taxes = taxes;
    });
  }

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
    const expense: Expense = {
      name: this.expenseFormGroup.value.name as string,
      price: this.expenseFormGroup.value.price as number,
      supplier: this.expenseFormGroup.value.supplier as Supplier,
      tax: this.expenseFormGroup.value.tax?.tax as Tax,
      taxValue: this.expenseFormGroup.value.tax?.value as number
    }

    this.accountingService.createExpense(expense).subscribe(console.log);
  }
}
