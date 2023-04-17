import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './../../ui/header/header.component';
import { ProductServiceRoutingModule } from './product-service-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceListComponent } from './product-service-list/product-service-list.component';
import { ProductServiceEditComponent } from './product-service-edit/product-service-edit.component';
import { ProductServiceComponent } from './product-service.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { ProductServiceEditFormComponent } from './shared/ui/product-service-edit-form/product-service-edit-form.component';

@NgModule({
  declarations: [
    ProductServiceListComponent,
    ProductServiceEditComponent,
    ProductServiceComponent,
    ProductServiceEditFormComponent,
  ],
  imports: [
    CommonModule,
    ProductServiceRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HeaderComponent,
    FormsModule,
  ]
})
export class ProductServiceModule { }
