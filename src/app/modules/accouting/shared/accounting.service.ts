import { HttpClient } from '@angular/common/http';
import { Category, Expense, ExpenseApiPayload, Product, ProductAPI, Storage, Supplier, Tax, TaxApiPayload } from './accouting.types';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, switchMap, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice, InvoiceAPI, Purchase, PurchaseAPI, PurchasePaymentMethod } from '../purchase/purchase.type';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  private taxesSubject: BehaviorSubject<Tax[]> = new BehaviorSubject<Tax[]>([]);
  private suppliersSubject: BehaviorSubject<Supplier[]> = new BehaviorSubject<Supplier[]>([]);
  private invoicesSubject: BehaviorSubject<Invoice[]> = new BehaviorSubject<Invoice[]>([]);
  private storagesSubject: BehaviorSubject<Storage[]> = new BehaviorSubject<Storage[]>([]);
  private categorySubject: BehaviorSubject<Category | any> = new BehaviorSubject<Category | any>(null);
  private categoriesSubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private expensesSubject: BehaviorSubject<Expense[]> = new BehaviorSubject<Expense[]>([]);
  private paymentMethodsSubject: BehaviorSubject<PurchasePaymentMethod[]> = new BehaviorSubject<PurchasePaymentMethod[]>([
    { name: "metodo 2" },
    { name: "metodo 1" },
  ]);

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

  get purchasePaymentMethods$(): Observable<PurchasePaymentMethod[]> {
    return this.paymentMethodsSubject.asObservable();
  }

  getPurchasePaymentMethods(): Observable<PurchasePaymentMethod[]> {
    return this.purchasePaymentMethods$;
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
      `${environment.apiURL.root}/${this.baseUrlPath}/supplier`, { params: { format: environment.apiURL.responseFormat } }
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
    return this.httpClient.get<InvoiceAPI[]>(
      `${environment.apiURL.root}/${this.baseUrlPath}/transaction`, { params: { format: environment.apiURL.responseFormat } }
    ).pipe(
      map(invoicesResponse => {
        const invoices: Invoice[] = invoicesResponse.map(invoice => ({
          id: invoice.id?.toString(),
          toPay: invoice.to_pay,
          category: {
            id: invoice.id?.toString(),
          },
          supplier: {
            name: invoice.supplier_name,
          },
          remaining: invoice.remaining,
          code: invoice.code,
          additionalCost: invoice.additional_cost,
          complete: invoice.complete,
          totalPaid: invoice.total_paid,
          paymentMethod: {
            name: invoice.payment_method,
          },
        }));

        this.invoicesSubject.next(invoices);

        return invoices;
      }),
    );
  }

  getStorages(): Observable<Storage[]> {
    return this.httpClient.get<Storage[]>(
      `${environment.apiURL.root}/${this.baseUrlPath}`, { params: { format: environment.apiURL.responseFormat } }
    ).pipe(
      map(storagesResponse => {
        const storages: Storage[] = storagesResponse.map(storage => ({
          id: storage.id,
          name: storage.name,
        }));

        this.storagesSubject.next(storages);

        return storages;
      }),
    );
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getSellingProducts(): Observable<Product[]> {
    return this.httpClient.get<ProductAPI[]>(
      `${environment.apiURL.root}/${this.baseUrlPath}/product/`
    ).pipe(
      map(productsResponse => {
        const products: Product[] = productsResponse.map(product => ({
          id: product.id,
          name: product.name,
          price: product.price,
          sellingPrice: product.selling_price,
          quantity: product.quantity,
        }));

        this.productsSubject.next(products);

        return products;
      }),
    );
  }

  createCategory(category: Category): Observable<Category> {
    const categoryPayload: any = {
      title: category.name,
    };

    return this.categories$.pipe(
      take(1),
      switchMap(categories => this.httpClient.post<{ id: string; title: string; }>(`${environment.apiURL.root}/${this.baseUrlPath}/order-group/`, categoryPayload).pipe(
        map(categoryResponse => {
          const category: Category = {
            id: categoryResponse.id,
            name: categoryResponse.title,
          };

          this.categoriesSubject.next([...categories, category]);
          this.categorySubject.next(category);

          return category;
        }),
      )),
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

          return tax;
        }),
      )),
    );
  }

  createExpense(expense: Expense): Observable<Expense> {
    const createExpesePayload: ExpenseApiPayload = {
      name: expense.name,
      supplier: expense.supplier?.id,
      tax: expense.tax?.id,
      tax_value: expense.taxValue,
      total_amount: expense.price,
    }

    return this.expenses$.pipe(
      take(1),
      switchMap(expenses => this.httpClient.post<ExpenseApiPayload>(`${environment.apiURL.root}/${this.baseUrlPath}/expenses/`, createExpesePayload).pipe(
        map(expenseResponse => {
          const expense: Expense = {
            id: expenseResponse.id,
            name: expenseResponse.name,
            price: expenseResponse.total_amount,
            tax: {
              id: expenseResponse.tax
            },
            supplier: {
              id: expenseResponse.supplier
            },
            taxValue: expenseResponse.tax_value,
          };

          this.expensesSubject.next([...expenses, expense]);

          return expense;
        })
      )),
    );
  }

  createPurchase(purchase: Purchase): Observable<Purchase> {
    return of(purchase);
    );

    return of(purchase);
  }
}
