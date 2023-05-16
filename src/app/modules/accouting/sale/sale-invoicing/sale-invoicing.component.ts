import { FormControl } from '@angular/forms';
import { Product } from '../../shared/accouting.types';
import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-invoicing',
  templateUrl: './sale-invoicing.component.html',
  styleUrls: ['./sale-invoicing.component.scss']
})
export class SaleInvoicingComponent implements OnInit {
  private products: Product[] = [];
  filteredProducts: Product[] = [];

  searchProductField = new FormControl<string | null>(null);

  constructor(
    private accountingService: AccountingService
  ) {}

  ngOnInit(): void {
    this.accountingService.products$.subscribe(products => {
      this.products = this.filteredProducts = products;
    });

    this.searchProductField.valueChanges.subscribe(searchTerm => {
      this.filteredProducts = this.products.filter(
        product => product.name?.toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase() as string)
      );
    });
  }

  addProduct(product: Product, quantity: number): void {
    console.log(product, quantity);
  }
}
