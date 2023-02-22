import { Account } from './../../accouting/account/account.types';
import { Tax } from './../../accouting/shared/accouting.types';
import { AccountingService } from './../../accouting/shared/accounting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-service-edit',
  templateUrl: './product-service-edit.component.html',
  styles: [
  ]
})
export class ProductServiceEditComponent implements OnInit {
  public taxes: Tax[] = [];
  public accounts: Account[] = [];

  constructor(
    private accountingService: AccountingService,
  ) {}

  ngOnInit(): void {
    this.accountingService.taxes$.subscribe((taxes) => {
      this.taxes = taxes;
    });

    this.accountingService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    })
  }
}
