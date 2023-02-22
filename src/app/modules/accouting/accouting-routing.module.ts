import { TaxEditComponent } from './tax/tax-edit/tax-edit.component';
import { AccoutingComponent } from './accouting.component';
import {
  AccoutingCategoriesResolver,
  AcountingNestedAccoutingsResolver,
  AcountingAccoutingsResolver
} from './shared/accouting.resolvers';
import { AccountListComponent } from './account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './account/account-edit/account-edit.component';

const routes: Routes = [
  {
    path: '', component: AccoutingComponent,
    children: [
      {
        path: 'plano-de-contas', component: AccountListComponent,
        resolve: {
          categories: AccoutingCategoriesResolver,
          accounts: AcountingNestedAccoutingsResolver,
        },
      },
      {
        path: 'criar-conta', component: AccountEditComponent,
        resolve: {
          accoutings: AcountingAccoutingsResolver,
        }
      },
      {
        path: 'editar-conta/:accoutingId', component: AccountEditComponent,
        resolve: {
          accountings: AcountingAccoutingsResolver,
        },
      },
      {
        path: 'criar-taxa', component: TaxEditComponent,
        resolve: {
          accounts: AcountingAccoutingsResolver
        },
      },

      {
        path: '', redirectTo: '/error/page-not-found', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccoutingRoutingModule {}
