import { ProductServiceListComponent } from './../product-service/product-service-list/product-service-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/error/page-not-found', pathMatch: 'full' },
  { path: 'plano-de-contas', component: AccountListComponent },
  { path: 'classes', component: CategoryListComponent },
  { path: 'productos-servicos', component: ProductServiceListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccoutingRoutingModule {}
