import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tax } from '../../shared/accouting.types';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styles: [
  ]
})
export class ExpenseEditComponent {
  expenseFormGroup = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    supplier: new FormControl<string | null>(null, Validators.required),
    price: new FormControl<number | null>(null, Validators.required),
    state: new FormControl<string | null>(null, Validators.required),
  });

  proofPreviewImage!: string;

  constructor(
    private accountingService: AccountingService
  ) {}


  taxes: Tax[] = [
    { name: 'taxa 1', value: 1 },
    { name: 'taxa 2', value: 2 },
    { name: 'taxa 3', value: 3 },
  ];

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

  public displaySupplierName(supplier: Supplier): string|any {
    return supplier ? supplier.name as string : '';
  }

  public createSupplier(): void {
    const supplier: Supplier = {
      name: this.expenseFormGroup.value.supplier as string
    };    

    this.accountingService.createSupplier(supplier).subscribe((supplier) => {
      this.expenseFormGroup.patchValue({
        supplier: supplier
      });
    })
  }

  submitExpense(): void {
    const expense: Expense = {
      name: this.expenseFormGroup.value.name as string,
      price: this.expenseFormGroup.value.price as number,
      supplier: this.expenseFormGroup.value.supplier as Supplier,
      tax: this.expenseFormGroup.value.name as Tax,
    }

    this.accountingService.createExpense(expense).subscribe(console.log);
  }
}
