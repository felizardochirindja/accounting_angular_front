import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService
  ) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authenticationService.isValid().pipe(
      switchMap((authenticated) => {
        if (!authenticated) {
          this.authenticationService.signIn();
          return of(false);
        }

        return of(true);
      }),
    );
  }
}
