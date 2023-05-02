import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    public router: Router,
  ) {}

  login() {
    this.router.navigate(['./dashboard']);
  }
}
