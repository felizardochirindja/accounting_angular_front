import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { AccoutingCategoriesResolver, AcountingNestedAccoutingsResolver, AcountingAccoutingsResolver } from './shared/accouting.resolvers';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './account/account-edit/account-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/error/page-not-found', pathMatch: 'full' },
  {
    path: 'plano-de-contas', component: AccountListComponent,
    resolve: {
      categories: AccoutingCategoriesResolver,
      accounts: AcountingNestedAccoutingsResolver,
    },
    children: [
      {
        path: 'criar', component: AccountEditComponent,
        resolve: {
          accoutings: AcountingAccoutingsResolver
        }
      }
    ]
  },
  {
    path: 'classes', component: CategoryListComponent,
    resolve: {
      catefories: AccoutingCategoriesResolver
    },
    children: [
      { path: 'criar', component: CategoryEditComponent },
      { path: 'editar/:categoryId', component: CategoryEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccoutingRoutingModule {}
