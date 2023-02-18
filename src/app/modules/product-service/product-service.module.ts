import { ProductServiceRoutingModule } from './product-service-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceListComponent } from './product-service-list/product-service-list.component';
import { ProductServiceEditComponent } from './product-service-edit/product-service-edit.component';
import { ProductServiceComponent } from './product-service.component';

@NgModule({
  declarations: [
    ProductServiceListComponent,
    ProductServiceEditComponent,
    ProductServiceComponent
  ],
  imports: [
    CommonModule,
    ProductServiceRoutingModule,
  ]
})
export class ProductServiceModule { }
