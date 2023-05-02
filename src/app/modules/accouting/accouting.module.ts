import { HeaderComponent } from './../../ui/header/header.component';
import { AccoutingComponent } from './accouting.component';
import { AccoutingRoutingModule } from './accouting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaxEditComponent } from './tax/tax-edit/tax-edit.component';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { PurchaseInvoicingComponent } from './purchase/purchase-invoicing/purchase-invoicing.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { SaleInvoicingComponent } from './sale/sale-invoicing/sale-invoicing.component';
import { SaleComponent } from './sale/sale.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccoutingRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HeaderComponent,
    MatAutocompleteModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  declarations: [
    AccoutingComponent,
    TaxEditComponent,
    PurchaseEditComponent,
    ExpenseEditComponent,
    PurchaseInvoicingComponent,
    SaleInvoicingComponent,
    SaleComponent
  ]
})
export class AccoutingModule {}
