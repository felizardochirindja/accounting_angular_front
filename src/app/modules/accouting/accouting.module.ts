import { HeaderComponent } from './../../ui/header/header.component';
import { AccoutingComponent } from './accouting.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccoutingRoutingModule } from './accouting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountNestedListComponent } from './shared/ui/account-nested-list/account-nested-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { FormsModule } from '@angular/forms';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { TaxEditComponent } from './tax/tax-edit/tax-edit.component';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccoutingRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HeaderComponent,
  ],
  declarations: [
    AccountListComponent,
    CategoryListComponent,
    AccountNestedListComponent,
    CategoryEditComponent,
    AccountEditComponent,
    AccoutingComponent,
    TaxEditComponent,
    PurchaseEditComponent,
  ]
})
export class AccoutingModule {}
