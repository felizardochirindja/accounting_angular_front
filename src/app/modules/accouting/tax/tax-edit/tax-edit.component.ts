import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { AccountingService } from '../../shared/accounting.service';

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
    console.log(this.editTaxForm.value);
  }
}
