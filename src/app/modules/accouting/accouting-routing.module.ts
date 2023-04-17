import { TaxEditComponent } from './tax/tax-edit/tax-edit.component';
import { AccoutingComponent } from './accouting.component';
import {
  AccoutingCategoriesResolver,
  AcountingNestedAccountsResolver,
  AcountingAccountsResolver,
  AccountngAccountResolver
} from './shared/accouting.resolvers';
import { AccountListComponent } from './account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';

const routes: Routes = [
  {
    path: '', component: AccoutingComponent,
    children: [
      {
        path: 'plano-de-contas', component: AccountListComponent,
        resolve: {
          categories: AccoutingCategoriesResolver,
          nestedAccounts: AcountingNestedAccountsResolver,
        },
      },
      {
        path: 'criar-conta', component: AccountEditComponent,
        resolve: {
          accounts: AcountingAccountsResolver,
        }
      },
      {
        path: 'editar-conta/:accountId', component: AccountEditComponent,
        resolve: {
          accounts: AcountingAccountsResolver,
          account: AccountngAccountResolver,
        },
      },
      {
        path: 'criar-taxa', component: TaxEditComponent,
        resolve: {
          accounts: AcountingAccountsResolver
        },
      },
      {
        path: 'comprar', component: PurchaseEditComponent,
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
