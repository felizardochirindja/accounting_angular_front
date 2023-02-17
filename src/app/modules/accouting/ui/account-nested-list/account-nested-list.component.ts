import { Account } from './../../account/account.types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-nested-list',
  template: `
    <ul *ngFor="let account of accounts">
      <li>
        {{ account.name }} <a [routerLink]="['./editar', account.id]">editar</a>

        <app-account-nested-list *ngIf="account.children" [accounts]="account.children"></app-account-nested-list>
      </li>
    </ul>
  `,
})
export class AccountNestedListComponent {
  @Input() accounts: Account[] = [];
}
