import { environment } from 'src/environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  constructor(
    public auth0: AuthService,
  ) {}

  login() {
    this.auth0.loginWithRedirect({
      authorizationParams: {
        redirect_uri: environment.auth0.redirect.login,
      }
    })
  }
}
