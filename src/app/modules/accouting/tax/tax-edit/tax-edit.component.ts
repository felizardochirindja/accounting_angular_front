import { Account } from './../../account/account.types';
import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-edit',
  templateUrl: './tax-edit.component.html',
  styles: [
  ]
})
export class TaxEditComponent implements OnInit {
  public accounts: Account[] = [];

  constructor(
    private accountingService: AccountingService
  ) {}

  ngOnInit(): void {
    this.accountingService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    })
  }
}
