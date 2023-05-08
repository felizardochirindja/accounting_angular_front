import { HttpClient } from '@angular/common/http';
import { Category, Expense, Product, Storage, Supplier, Tax } from './accouting.types';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { v4 as uuid } from 'uuid';
import { Invoice, Purchase } from '../purchase/purchase.type';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  private taxesSubject: BehaviorSubject<Tax[]> = new BehaviorSubject<Tax[]>([]);
  private suppliersSubject: BehaviorSubject<Supplier[]> = new BehaviorSubject<Supplier[]>([]);
  private invoicesSubject: BehaviorSubject<Invoice[]> = new BehaviorSubject<Invoice[]>([]);
  
  private storagesSubject: BehaviorSubject<Storage[]> = new BehaviorSubject<Storage[]>([
    {
      id: uuid(),
      name: "storage 1",
    },
    {
      id: uuid(),
      name: "storage 2",
    },
  ]);

  private categorySubject: BehaviorSubject<Category | any> = new BehaviorSubject<Category | null>(null);
  private categoriesSubject: BehaviorSubject<Category[] | any> = new BehaviorSubject([]);
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private expensesSubject: BehaviorSubject<Expense[]> = new BehaviorSubject<Expense[]>([]);

  private readonly baseUrlPath = 'accounts';

  constructor(
    private httpClient: HttpClient
  ) { }

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

  getLastCreatedCategory(): Observable<Category> {
    return this.category$;
  }

  getTaxes(): Observable<Tax[]> {
    return this.httpClient.get<TaxApiPayload[]>(`${environment.apiURL.root}/${this.baseUrlPath}/tax/`).pipe(
      map(taxesResponse => {
        const taxes: Tax[] = taxesResponse.map(tax => ({
          id: tax.id,
          name: tax.sail,
          description: tax.description,
          value: tax.porcentage_value,
        }));
        
        this.taxesSubject.next(taxes);

        return taxes;
      }),
    );
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

  getOpenCategories(): Observable<Category[]> {
    return this.categories$;
  }

  getOpenInvoices(): Observable<Invoice[]> {    
    return this.invoices$;
  }

  getStorages(): Observable<Storage[]> {
    return this.storages$;
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  createCategory(category: Category): Observable<Category> {
    return this.categories$.pipe(
      take(1),
      map(categories => {
        category.id = uuid();
        
        this.categoriesSubject.next([...categories, category]);
        this.categorySubject.next(category);
        
        return category;
      }),
    );
  }

  createSupplier(supplier: Supplier): Observable<Supplier> {
    const createSupplierpayload: Supplier = {
      name: supplier.name
    };
    
    return this.suppliers$.pipe(
      take(1),
      switchMap(suppliers => this.httpClient.post<Supplier>(`${environment.apiURL.root}/${this.baseUrlPath}/supplier/`, createSupplierpayload).pipe(
        map(supplierResponse => {
          this.suppliersSubject.next([...suppliers, supplierResponse]);

          return supplierResponse;
        })
      )),
    );
  }

  createTax(tax: Tax): Observable<Tax> {
    const createTaxPayload: TaxApiPayload = {
      sail: tax.name,
      description: tax.description,
      porcentage_value: tax.value,
    }

    return this.taxes$.pipe(
      take(1),
      switchMap(taxes => this.httpClient.post<TaxApiPayload>(`${environment.apiURL.root}/${this.baseUrlPath}/tax/`, createTaxPayload).pipe(
        map(taxeResponse => {
          const tax: Tax = {
            id: taxeResponse.id,
            name: taxeResponse.sail,
            description: taxeResponse.description,
            value: taxeResponse.porcentage_value,
          };

          this.taxesSubject.next([...taxes, tax]);

          return taxeResponse;
        }),
      )),
    );
  }

  createExpense(expense: Expense): Observable<Expense> {
    return this.expenses$.pipe(
      take(1),
      map(expenses => {
        expense.id = uuid();

        this.expensesSubject.next([...expenses, expense]);
        return expense;
      })
    );
  }

  createPurchase(purchase: Purchase): Observable<Purchase> {
    return this.products$.pipe(
      take(1),
      map(products => {
        const product: Product = {
          id: uuid(),
          name: purchase.name,
          quantity: purchase.quantity,
          category: purchase.category,
          price: purchase.price,
          sellingPrice: purchase.sellingPrice,
          storage: purchase.storage,
          supplier: purchase.supplier
        }
        
        this.productsSubject.next([...products, product]);

        const supplierExists =  this.invoicesSubject.value.some(invoice => invoice.supplier?.name === product.supplier?.name);
        
        if (!supplierExists) {
          const invoice: Invoice = {
            id: uuid(),
            complete: false,
            category: product.category,
            supplier: product.supplier,
          }

          this.invoicesSubject.next([...this.invoicesSubject.value, invoice]);
        }

        return purchase;
      }),
    );
  }
}
