import { AccountingService } from './../../shared/accounting.service';
import { Category, CategoryType } from './../../category/category.types';
import { Account } from './../account.types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent implements OnInit {
  public categories: Category[] = [];
  public accounts: Account[] = [];

  constructor(
    private accountingService: AccountingService
  ) {}

  ngOnInit(): void {
    this.accountingService.categories$.subscribe((categories) => {
      this.categories = categories;
    });

    this.accountingService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    });
  }
}
