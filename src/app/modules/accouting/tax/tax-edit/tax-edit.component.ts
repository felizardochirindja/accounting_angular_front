import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { AccountingService } from '../../shared/accounting.service';
import { Tax } from '../../shared/accouting.types';

@Component({
  selector: 'app-tax-edit',
  templateUrl: './tax-edit.component.html',
  styles: [
  ]
})
export class TaxEditComponent {
  @ViewChild('editTaxForm') private editTaxForm!: NgForm;

  constructor(
    private accountingService: AccountingService
  ) {}

  submitTax() {
    const tax: Tax = {
      name: this.editTaxForm.value.name,
      value: this.editTaxForm.value.value,
      description: this.editTaxForm.value.description,
    }

    this.accountingService.createTax(tax).subscribe(console.log);
  }
}
