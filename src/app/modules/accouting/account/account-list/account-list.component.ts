import { AccountingService } from './../../shared/accounting.service';
import { Category } from './../../category/category.types';
import { Account } from './../account.types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent implements OnInit {
  public activeCategory!: Category;
  public categories: Category[] = [];
  public accounts: Account[] = [];

  constructor(
    private accountingService: AccountingService
  ) {}

  ngOnInit(): void {
    this.accountingService.categories$.subscribe((categories) => {
      this.categories = categories;
      this.activeCategory = categories[0];
    });

    this.accountingService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  getAccountsByCategory(category: Category): Account[] {
    return this.accounts.filter(account => account.categoryId === category.id);
  }

  setActiveCategory(category: Category): void {
    this.activeCategory = category;
  }
}
