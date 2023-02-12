import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Items, ProductService } from './product-service.types';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private item: BehaviorSubject<ProductService | any> = new BehaviorSubject(null);
  private items: BehaviorSubject<Items | any> = new BehaviorSubject(null);

  constructor() { }

  get item$(): Observable<ProductService> {
    return this.item.asObservable();
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
