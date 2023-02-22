import { NgForm, NgModel } from '@angular/forms';
import { Account } from './../../account/account.types';
import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tax-edit',
  templateUrl: './tax-edit.component.html',
  styles: [
  ]
})
export class TaxEditComponent implements OnInit {
  @ViewChild('editTaxForm') private editTaxForm!: NgForm;
  public accounts: Account[] = [];

  constructor(
    private accountingService: AccountingService
  ) {}

  ngOnInit(): void {
    this.accountingService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    })
  }

  getTaxControlErrorMessage(nameControl: NgModel): string {
    if (nameControl.hasError('required')) {
      return 'A taxa é obrigatória!';
    }

    return '';
  }

  submitTax() {
    console.log(this.editTaxForm);
  }
}
