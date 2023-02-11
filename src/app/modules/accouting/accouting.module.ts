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
  ]
})
export class AccoutingModule { }
