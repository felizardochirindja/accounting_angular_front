import { ProductServiceRoutingModule } from './product-service-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceListComponent } from './product-service-list/product-service-list.component';

@NgModule({
  declarations: [
    ProductServiceListComponent
  ],
  imports: [
    CommonModule,
    ProductServiceRoutingModule,
  ]
})
export class ProductServiceModule { }
