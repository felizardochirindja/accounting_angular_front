import { TaxEditComponent } from './tax/tax-edit/tax-edit.component';
import { AccoutingComponent } from './accouting.component';
import {
  AccountingSuppliersResolver,
  AccountingStoragesResolver,
  AccountingTaxesResolver,
  AccountingLastCreatedCategoryResolver,
  AccountingProductsResolver,
  AccountingOpenInvoices,
  AccountingOpenCategories,
  AccountingProductsForSaleResolver,
  AccountingPurchasePaymentMethodsResolver,
  AccountingAccountingBookResolver,
} from './shared/accouting.resolvers';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { PurchaseInvoicingComponent } from './purchase/purchase-invoicing/purchase-invoicing.component';
import { SaleComponent } from './sale/sale.component';
import { SaleInvoicingComponent } from './sale/sale-invoicing/sale-invoicing.component';
import { DiarioComponent } from './diario/diario.component';

const routes: Routes = [
  {
    path: '', component: AccoutingComponent,
    children: [
      {
        path: 'criar-taxa', component: TaxEditComponent,
      },
      {
        path: 'despesa', component: ExpenseEditComponent,
        resolve: {
          suppliers: AccountingSuppliersResolver,
          taxes: AccountingTaxesResolver,
        }
      },

      {
        path: 'compra', component: PurchaseEditComponent,
        resolve: {
          suppliers: AccountingSuppliersResolver,
          storages: AccountingStoragesResolver,
          lastCreatedCategory: AccountingLastCreatedCategoryResolver,
          paymentMethods: AccountingPurchasePaymentMethodsResolver,
        }
      },
      {
        path: 'compra/faturas', component: PurchaseInvoicingComponent,
        resolve: {
          products: AccountingProductsResolver,
          openInvoices: AccountingOpenInvoices,
          openCategories: AccountingOpenCategories,
          lastUsedCategory: AccountingLastCreatedCategoryResolver,
        }
      },
      {
        path: 'venda', component: SaleComponent,
        resolve: {
          productsForSale: AccountingProductsForSaleResolver
        },
        children: [
          { 
            path: 'fatura', component: SaleInvoicingComponent,
            resolve: {
              paymentMethods: AccountingPurchasePaymentMethodsResolver,
            }
          }
        ]
      },
      {
        path: "diario", component: DiarioComponent,
        resolve: {
          accountingBook: AccountingAccountingBookResolver,
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
