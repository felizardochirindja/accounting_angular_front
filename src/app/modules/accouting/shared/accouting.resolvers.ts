import { Account } from './../account/account.types';
import { AccountingService } from './accounting.service';
import { Category } from './../category/category.types';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
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
export class AcountingNestedAccoutingsResolver implements Resolve<Account[]> {
  constructor(
    private accountingService: AccountingService,
  ) {}

  resolve(): Observable<Account[]> {
    console.log('nested');
    
    return this.accountingService.getNestedAccounts();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AcountingAccoutingsResolver implements Resolve<Account[]> {
  constructor(
    private accountingService: AccountingService,
  ) {}

  resolve(): Observable<Account[]> {
    console.log('normal');
    
    return this.accountingService.getAccounts();
  }
}
