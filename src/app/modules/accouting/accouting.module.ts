import { CategoryListComponent } from './category/category-list/category-list.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccoutingRoutingModule } from './accouting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountNestedListComponent } from './ui/account-nested-list/account-nested-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountEditComponent } from './account/account-edit/account-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccoutingRoutingModule,
  ],
  declarations: [
    AccountListComponent,
    CategoryListComponent,
    AccountNestedListComponent,
    CategoryEditComponent,
    AccountEditComponent,
  ]
})
export class AccoutingModule {}
