import { AccountingTaxesResolver, AcountingAccoutingsResolver } from './../accouting/shared/accouting.resolvers';
import { ProductServiceComponent } from './product-service.component';
import { ProductServiceEditComponent } from './product-service-edit/product-service-edit.component';
import { ProductServiceItemsResolver } from './shared/product-service.resolver';
import { ProductServiceListComponent } from './product-service-list/product-service-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: ProductServiceComponent,
    resolve: {
      items: ProductServiceItemsResolver,
    },
    children: [
      {
        path: 'listar', component: ProductServiceListComponent,
      },
      {
        path: 'criar', component: ProductServiceEditComponent,
        resolve: {
          taxes: AccountingTaxesResolver,
          accounts: AcountingAccoutingsResolver,
        }
      },
      {
        path: 'editar/:itemId', component: ProductServiceEditComponent,
        resolve: {
          taxes: AccountingTaxesResolver,
          accounts: AcountingAccoutingsResolver,
        }
      },
      
      {
        path: '', redirectTo: '/error/page-not-found', pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductServiceRoutingModule {}
