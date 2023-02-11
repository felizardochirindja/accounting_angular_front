import { Account } from './../account/account.types';
import { Category } from './../category/category.types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  private category: BehaviorSubject<Category | any> = new BehaviorSubject(null);
  private categories: BehaviorSubject<Category[] | any> = new BehaviorSubject(null);
  private account: BehaviorSubject<Account | any> = new BehaviorSubject(null);
  private accounts: BehaviorSubject<Account[] | any> = new BehaviorSubject(null);

  constructor(
    private httpClient: HttpClient
  ) {}

  get category$(): Observable<Category> {
    return this.category.asObservable();
  }

  get categories$(): Observable<Category[]> {
    return this.categories.asObservable();
  }

  get account$(): Observable<Account> {
    return this.account.asObservable();
  }

  get accounts$(): Observable<Account[]> {
    return this.accounts.asObservable();
  }
}
