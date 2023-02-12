import { CategoryListComponent } from './category/category-list/category-list.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccoutingRoutingModule } from './accouting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AccoutingRoutingModule,
  ],
  declarations: [
    AccountListComponent,
    CategoryListComponent,
  ]
})
export class AccoutingModule {}
