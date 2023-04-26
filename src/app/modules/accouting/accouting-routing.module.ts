import { TaxEditComponent } from './tax/tax-edit/tax-edit.component';
import { AccoutingComponent } from './accouting.component';
import {
  AccountingSuppliersResolver,
  AccountingStoragesResolver,
  AccountingTaxesResolver,
  AccountingLastCreatedCategoryResolver,
  AccountingProductsResolver
} from './shared/accouting.resolvers';
import { AccountListComponent } from './account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { PurchaseInvoicingComponent } from './purchase/purchase-invoicing/purchase-invoicing.component';

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
        resolve: {
          suppliers: AccountingSuppliersResolver,
          storages: AccountingStoragesResolver,
          lastCreatedCategory: AccountingLastCreatedCategoryResolver,
        }
      },
      {
        path: 'faturar', component: PurchaseInvoicingComponent,
        resolve: {
          products: AccountingProductsResolver,
        }
      },
      {
        path: 'despesa', component: ExpenseEditComponent,
        resolve: {
          suppliers: AccountingSuppliersResolver,
          taxes: AccountingTaxesResolver,
        }
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
