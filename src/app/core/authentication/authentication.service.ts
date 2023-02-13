import { Client } from './../client/client.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated: boolean = false;

  constructor(
    private httpClient: HttpClient
  ) {}

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  signUp(client: Client): Observable<any> {
    return this.httpClient.post('api/auth/sign-up', client);
  }

  signIn() {
    if (this.isAuthenticated) {
      return throwError(() => new Error('company is already logged in.'));
    }

    // implement login logic
  }

  signOut(): Observable<any> {
    localStorage.removeItem('accessToken');
    this.isAuthenticated = false;
    return of(true);
  }

  isValid(): Observable<boolean> {
    if (!this.accessToken) {
      return of(false);
    }

    if (this.isAuthenticated) {
      return of(true);
    }

    return this.refreshToken();
  }

  refreshToken(): Observable<boolean> {
    return this.httpClient.post<AuthenticationApiResponse>('', { accessToken: this.accessToken }).pipe(
      switchMap((response) => {
        this.accessToken = response.accessToken;
        this.isAuthenticated = true;
        this.clientService.client = response.client;

        return of(true);
      }),
      catchError(() => {
        return of(false);
      })
    );
  }
}
