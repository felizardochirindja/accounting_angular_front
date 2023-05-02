import { TaxEditComponent } from './tax/tax-edit/tax-edit.component';
import { AccoutingComponent } from './accouting.component';
import {
  AccountingSuppliersResolver,
  AccountingStoragesResolver,
  AccountingTaxesResolver,
  AccountingLastCreatedCategoryResolver,
  AccountingProductsResolver,
  AccountingOpenInvoices,
  AccountingOpenCategories
} from './shared/accouting.resolvers';
import { AccountListComponent } from './account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { PurchaseInvoicingComponent } from './purchase/purchase-invoicing/purchase-invoicing.component';
import { SaleComponent } from './sale/sale.component';
import { SaleInvoicingComponent } from './sale/sale-invoicing/sale-invoicing.component';

const routes: Routes = [
  {
    path: '', component: AccoutingComponent,
    children: [
      {
        path: 'plano-de-contas', component: AccountListComponent,
      },
      {
        path: 'criar-conta', component: AccountEditComponent,
      },
      {
        path: 'editar-conta/:accountId', component: AccountEditComponent,
      },
      {
        path: 'criar-taxa', component: TaxEditComponent,
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
        path: 'venda', component: SaleComponent,
        children: [
          { path: 'fatura', component: SaleInvoicingComponent }
        ]
      },
      {
        path: 'faturar', component: PurchaseInvoicingComponent,
        resolve: {
          products: AccountingProductsResolver,
          openInvoices: AccountingOpenInvoices,
          openCategories: AccountingOpenCategories,
          lastUsedCategory: AccountingLastCreatedCategoryResolver
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
