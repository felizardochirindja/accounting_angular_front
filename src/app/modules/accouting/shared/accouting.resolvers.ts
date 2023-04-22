import { Supplier, Tax } from './accouting.types';
import { Account } from './../account/account.types';
import { AccountingService } from './accounting.service';
import { Category } from './../category/category.types';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccoutingCategoriesResolver implements Resolve<Category[]> {
  constructor(
    private accountingService: AccountingService,
  ) {}

  resolve(): Observable<Category[]> {
    return this.accountingService.getCategories();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AcountingNestedAccountsResolver implements Resolve<Account[]> {
  constructor(
    private accountingService: AccountingService,
  ) {}

  resolve(): Observable<Account[]> {    
    return this.accountingService.getNestedAccounts();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AcountingAccountsResolver implements Resolve<Account[]> {
  constructor(
    private accountingService: AccountingService,
  ) {}

  resolve(): Observable<Account[]> {    
    return this.accountingService.getAccounts();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AccountngAccountResolver implements Resolve<Account | boolean> {
  resolve(route: ActivatedRouteSnapshot): Observable<Account> | boolean {
    console.log(route);

    return false
  }
}

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
