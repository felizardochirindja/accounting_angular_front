import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {}
