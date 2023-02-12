import { AccoutingCategoriesResolver } from './shared/accouting.resolvers';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/error/page-not-found', pathMatch: 'full' },
  {
    path: 'plano-de-contas', component: AccountListComponent,
    resolve: {
      categories: AccoutingCategoriesResolver,
    }
  },
  {
    path: 'classes', component: CategoryListComponent,
    resolve: {
      catefories: AccoutingCategoriesResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccoutingRoutingModule {}
