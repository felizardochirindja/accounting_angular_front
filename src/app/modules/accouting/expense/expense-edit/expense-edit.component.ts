import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tax } from '../../shared/accouting.types';

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
    state: new FormControl<string | null>(null, Validators.required),
  });

  proofPreviewImage!: string;

  suppliers: Supplier[] = [];
  taxes: Tax[] = [];
  canDisplayCreateSupplierButton: boolean = false;
  filteredSuppliers: Supplier[] = [];
  
  constructor(
    private accountingService: AccountingService
  ) {}

  public ngOnInit(): void {
    this.accountingService.taxes$.subscribe(taxes => {
      this.taxes = taxes;
    });

    this.accountingService.suppliers$.subscribe(suppliers => {
      this.suppliers = suppliers;
    });

    this.expenseFormGroup.controls.supplier.valueChanges.pipe(
      startWith(''),
      map(supplier => typeof supplier === 'string' ? supplier : supplier?.name),
      map((supplierName) => {
        const filteredSuppliers: Supplier[] = this.suppliers.filter(
          supplier => supplier.name?.toLocaleLowerCase().includes(supplierName?.toLocaleLowerCase() as string)
        );

        this.canDisplayCreateSupplierButton = filteredSuppliers.some(supplier => supplier.name !== supplierName) && supplierName !== '';

        return filteredSuppliers;
      }),
    ).subscribe(filteredSuppliers => {
      this.filteredSuppliers = filteredSuppliers;
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
