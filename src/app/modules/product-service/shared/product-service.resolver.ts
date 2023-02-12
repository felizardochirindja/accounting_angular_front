import { Items } from '../shared/product-service.types';
import { ProductServiceService } from './product-service.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceItemsResolver implements Resolve<Items[]> {
  constructor(
    private productServiceService: ProductServiceService,
  ) {}

  resolve(): Observable<Items[]> {
    return this.productServiceService.getItems();
  }
}
