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

  getAccounts(): Observable<Account[]> {
    const accounts: Account[] = [
      {
        name: 'conta mae 1', id: '1', categoryId: '1',
        children: [
          { name: 'conta filha 1.1', parentId: '1', categoryId: '1' },
          {
            name: 'conta filha 1.2', parentId: '1', categoryId: '1',
            children: [
              { name: 'conta filha 1.2.1', parentId: '1', categoryId: '1' },
            ],
          },
          { name: 'conta filha 1.3', parentId: '1', categoryId: '1' },
        ],
      },
      {
        name: 'conta mae 2', id: '2', categoryId: '3',
        children: [
          { name: 'conta filha 2.1', parentId: '3', categoryId: '3' },
          { name: 'conta filha 2.2', parentId: '3', categoryId: '3' },
        ],
      },
      {
        name: 'conta mae 3', id: '3', categoryId: '2',
        children: [
          { name: 'conta filha 3.1', parentId: '3', categoryId: '2' },
          { name: 'conta filha 3.2', parentId: '3', categoryId: '2' },
          { name: 'conta filha 3.3', parentId: '3', categoryId: '2' },
          { name: 'conta filha 3.3', parentId: '3', categoryId: '2' },
        ],
      },
      {
        name: 'conta mae 4', id: '4', categoryId: '1',
        children: [
          { name: 'conta filha 4.1', parentId: '4', categoryId: '1' },
        ],
      },
    ];

    this.accountsSubject.next(accounts);
    return of(accounts);
  }
}
