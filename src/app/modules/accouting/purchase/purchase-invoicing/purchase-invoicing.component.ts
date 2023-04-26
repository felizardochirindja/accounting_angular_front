import { Product } from '../../shared/accouting.types';
import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-invoicing',
  templateUrl: './purchase-invoicing.component.html',
  styleUrls: ['./purchase-invoicing.component.scss']
})
export class PurchaseInvoicingComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private accountingService: AccountingService,
  ) {}

  public ngOnInit(): void {
    this.accountingService.products$.subscribe(products => {
      this.products = products;
    })
  }
}
