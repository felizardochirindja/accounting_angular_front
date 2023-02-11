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

  get items$(): Observable<ProductService[]> {
    return this.items.asObservable();
  }
}
