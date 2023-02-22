import { AccountingService } from './../../../../accouting/shared/accounting.service';
import { Account } from './../../../../accouting/account/account.types';
import { Tax } from './../../../../accouting/shared/accouting.types';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-service-edit-form',
  templateUrl: './product-service-edit-form.component.html',
})
export class ProductServiceEditFormComponent {
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
