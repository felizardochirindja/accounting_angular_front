import { ProductServiceService } from './../shared/product-service.service';
import { Items } from '../shared/product-service.types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-service-list',
  templateUrl: './product-service-list.component.html',
  styles: [
  ]
})
export class ProductServiceListComponent implements OnInit {
  items: Items[] = [];

  constructor(
    private productServiceService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.productServiceService.items$.subscribe((items) => {
      this.items = items;
    });
  }
}
