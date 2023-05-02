import { HttpClient } from '@angular/common/http';
import { Supplier, Tax } from './accouting.types';
import { Account } from './../account/account.types';
import { Category, CategoryType } from './../category/category.types';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, switchMap, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  private categorySubject: BehaviorSubject<Category | any> = new BehaviorSubject(null);
  private categoriesSubject: BehaviorSubject<Category[] | any> = new BehaviorSubject(null);
  private accountSubject: BehaviorSubject<Account | any> = new BehaviorSubject(null);
  private accountsSubject: BehaviorSubject<Account[] | any> = new BehaviorSubject(null);
  private nestedAccountsSubject: BehaviorSubject<Account[] | any> = new BehaviorSubject(null);
  private taxesSubject: BehaviorSubject<Tax[] | any> = new BehaviorSubject(null);
  private suppliersSubject: BehaviorSubject<Supplier[] | any> = new BehaviorSubject(null);

  private readonly baseUrlPath = 'accounts';

  constructor(
    private httpClient: HttpClient
  ) {}

  get suppliers$(): Observable<Supplier[]> {
    return this.suppliersSubject.asObservable();
  }

  get invoices$(): Observable<Invoice[]> {
    return this.invoicesSubject.asObservable();
  }

  get storages$(): Observable<Storage[]> {
    return this.storagesSubject.asObservable();
  }

  get category$(): Observable<Category> {
    return this.categorySubject.asObservable();
  }

  get categories$(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }

  get taxes$(): Observable<Tax[]> {
    return this.taxesSubject.asObservable();
  }

  get products$(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  get expenses$(): Observable<Expense[]> {
    return this.expensesSubject.asObservable();
  }

  get taxes$(): Observable<Tax[]> {
    return this.taxesSubject.asObservable();
  }

  getCategories(): Observable<Category[]> {
    const categories: Category[] = [
      { id: '1', name: 'categoria1', type: CategoryType.Activo },
      { id: '2', name: 'categoria2', type: CategoryType.Gastos },
      { id: '3', name: 'categoria3', type: CategoryType.Capital },
    ]

    this.categoriesSubject.next(categories);
    return of(categories);
  }

  getAccounts(): Observable<Account[]> {
    const accounts: Account[] = [
      {
        name: 'conta mae 1', id: '1', categoryId: '1',
      },
      { name: 'conta filha 1.1', parentId: '1', categoryId: '1', id: '6' },
      {
        name: 'conta filha 1.2', parentId: '1', categoryId: '1', id: '3',
      },
      { name: 'conta filha 1.2.1', parentId: '1', categoryId: '1', id: '4' },
      { name: 'conta filha 1.3', parentId: '1', categoryId: '1', id: '5' },
      {
        name: 'conta mae 2', id: '2', categoryId: '3',
      },
      { name: 'conta filha 2.1', parentId: '3', categoryId: '3', id: '7' },
      { name: 'conta filha 2.2', parentId: '3', categoryId: '3', id: '8' },
      {
        name: 'conta mae 3', id: '3', categoryId: '2',
      },
      { name: 'conta filha 3.1', parentId: '3', categoryId: '2', id: '9' },
      { name: 'conta filha 3.2', parentId: '3', categoryId: '2', id: '10' },
      { name: 'conta filha 3.3', parentId: '3', categoryId: '2', id: '11' },
      { name: 'conta filha 3.3', parentId: '3', categoryId: '2', id: '12' },
      {
        name: 'conta mae 4', id: '4', categoryId: '1',
      },
      { name: 'conta filha 4.1', parentId: '4', categoryId: '1', id: '13' },
    ];

    this.accountsSubject.next(accounts);
    return of(accounts);
  }


  getNestedAccounts(): Observable<Account[]> {
    const accounts: Account[] = [
      {
        name: 'conta mae 1', id: '1', categoryId: '1',
        children: [
          { name: 'conta filha 1.1', parentId: '1', categoryId: '1', id: '6' },
          {
            name: 'conta filha 1.2', parentId: '1', categoryId: '1', id: '3',
            children: [
              { name: 'conta filha 1.2.1', parentId: '1', categoryId: '1', id: '4' },
            ],
          },
          { name: 'conta filha 1.3', parentId: '1', categoryId: '1', id: '5' },
        ],
      },
      {
        name: 'conta mae 2', id: '2', categoryId: '3',
        children: [
          { name: 'conta filha 2.1', parentId: '3', categoryId: '3', id: '7' },
          { name: 'conta filha 2.2', parentId: '3', categoryId: '3', id: '8' },
        ],
      },
      {
        name: 'conta mae 3', id: '3', categoryId: '2',
        children: [
          { name: 'conta filha 3.1', parentId: '3', categoryId: '2', id: '9' },
          { name: 'conta filha 3.2', parentId: '3', categoryId: '2', id: '10' },
          { name: 'conta filha 3.3', parentId: '3', categoryId: '2', id: '11' },
          { name: 'conta filha 3.3', parentId: '3', categoryId: '2', id: '12' },
        ],
      },
      {
        name: 'conta mae 4', id: '4', categoryId: '1',
        children: [
          { name: 'conta filha 4.1', parentId: '4', categoryId: '1', id: '12' },
        ],
      },
    ];

    this.nestedAccountsSubject.next(accounts);
    return of(accounts);
  }

  createCategory(category: Category): Observable<Category> {
    // create category logic
    return this.categories$.pipe(
      take(1),
      switchMap((categories) => {

        this.categoriesSubject.next([category, ...categories]);

        return of(category);
      })
    );
  }

  //
  getTaxes(): Observable<Tax[]> {
    const taxes: Tax[] = [
      { id: '1', name: 'taxa1', value: 0.17 },
      { id: '1', name: 'taxa2', value: 0.18 },
    ];

    this.taxesSubject.next(taxes);
    
    return of(taxes);
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(
      `${environment.apiURL.root}/${this.baseUrlPath}/supplier`, { params: { format:  environment.apiURL.responseFormat } }
    ).pipe(
      map(suppliersFromHttpResponse => {
        const suppliers: Supplier[] = suppliersFromHttpResponse.map(supplier => ({
          id: supplier.id,
          name: supplier.name,
          address: supplier.address,
          contact: supplier.contact,
          nuit: supplier.nuit
        }));

        this.suppliersSubject.next(suppliers);
        
        return suppliers;
      }),
    );
  }
}
