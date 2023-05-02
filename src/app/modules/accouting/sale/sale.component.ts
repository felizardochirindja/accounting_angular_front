import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  template: `
    <app-header [title]="'vender'"></app-header>
    
    <router-outlet></router-outlet>
  `,
})
export class SaleComponent {

}
