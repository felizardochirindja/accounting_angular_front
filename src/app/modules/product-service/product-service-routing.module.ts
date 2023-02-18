import { ProductServiceComponent } from './product-service.component';
import { ProductServiceEditComponent } from './product-service-edit/product-service-edit.component';
import { ProductServiceItemsResolver } from './shared/product-service.resolver';
import { ProductServiceListComponent } from './product-service-list/product-service-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProductServiceComponent,
    children: [
      {
        path: 'listar', component: ProductServiceListComponent,
        resolve: {
          items: ProductServiceItemsResolver
        }
      },
      {
        path: 'criar-producto', component: ProductServiceEditComponent,
        resolve: {
          items: ProductServiceItemsResolver
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductServiceRoutingModule {}
