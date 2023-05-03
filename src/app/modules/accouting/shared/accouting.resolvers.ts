import { Category, Product, Storage, Supplier, Tax } from './accouting.types';
import { AccountingService } from './accounting.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Invoice } from '../purchase/purchase.type';

@Injectable({
  providedIn: 'root'
})
export class AccountingTaxesResolver implements Resolve<Tax[]> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Tax[]> {
    return this.accountingService.getTaxes();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountingSuppliersResolver implements Resolve<Supplier[]> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Supplier[]> {
    return this.accountingService.getSuppliers();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountingOpenInvoices implements Resolve<Invoice[]> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Invoice[]> {
    return this.accountingService.getOpenInvoices();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountingOpenCategories implements Resolve<Category[]> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Category[]> {
    return this.accountingService.getOpenCategories();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountingLastCreatedCategoryResolver implements Resolve<Category> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Category> {
    return this.accountingService.getLastCreatedCategory();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountingStoragesResolver implements Resolve<Storage[]> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Storage[]> {
    return this.accountingService.getStorages();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountingProductsResolver implements Resolve<Product[]> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Product[]> {
    return this.accountingService.getProducts();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountingProductsForSaleResolver implements Resolve<Product[]> {
  constructor(
    private accountingService: AccountingService
  ) {}

  resolve(): Observable<Product[]> {
    return this.accountingService.getProducts();
  }
}
