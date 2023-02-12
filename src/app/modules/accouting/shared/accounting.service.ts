import { Account } from './../account/account.types';
import { Category, CategoryType } from './../category/category.types';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  private categorySubject: BehaviorSubject<Category | any> = new BehaviorSubject(null);
  private categoriesSubject: BehaviorSubject<Category[] | any> = new BehaviorSubject(null);
  private accountSubject: BehaviorSubject<Account | any> = new BehaviorSubject(null);
  private accountsSubject: BehaviorSubject<Account[] | any> = new BehaviorSubject(null);

  constructor() {}

  get category$(): Observable<Category> {
    return this.categorySubject.asObservable();
  }

  get categories$(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }

  get account$(): Observable<Account> {
    return this.accountSubject.asObservable();
  }

  get accounts$(): Observable<Account[]> {
    return this.accountsSubject.asObservable();
  }

  getCategories(): Observable<Category[]> {
    const categories: Category[] = [
      { id: '1', type: CategoryType.Activo },
      { id: '2', type: CategoryType.Gastos },
      { id: '3', type: CategoryType.Capital },
    ]

    this.categoriesSubject.next(categories);
    return of(categories);
  }
}
