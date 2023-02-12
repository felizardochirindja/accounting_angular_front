import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Items, ProductWithoutStock, ProductWithStock, Service } from './product-service.types';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private itemSubject: BehaviorSubject<Items | any> = new BehaviorSubject(null);
  private itemsSubject: BehaviorSubject<Items[] | any> = new BehaviorSubject(null);

  get item$(): Observable<Items> {
    return this.itemSubject.asObservable();
  }

  get items$(): Observable<Items[]> {
    return this.itemsSubject.asObservable();
  }

  getItems(): Observable<Items[]> {
    const productsWithoutStock: ProductWithoutStock[] = [
      { name: 'producto 1', price: 100 },
      { name: 'producto 2', price: 200 },
    ];
  
    const productsWithStock: ProductWithStock[] = [
      { name: 'producto 3', price: 300 },
    ];

    const services: Service[] = [
      { name: 'servico 1', price: 400 },
    ];

    const items: Items[] = [
      ...productsWithStock,
      ...productsWithoutStock,
      ...services,
    ]

    this.itemsSubject.next(items);
    return of(items);
  }
}
