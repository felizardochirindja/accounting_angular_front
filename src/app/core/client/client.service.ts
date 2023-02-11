import { HttpClient } from '@angular/common/http';
import { Client } from './client.types';
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientSubject: ReplaySubject<Client> = new ReplaySubject<Client>(1);

  constructor(
    private httpClient: HttpClient,
  ) {}

  set client(client: Client) {
    this.clientSubject.next(client);
  }

  get client$(): Observable<Client> {
    return this.clientSubject.asObservable();
  }

  update(client: Client): Observable<any> {
    return this.httpClient.patch<Client>('api/common/user', { client }).pipe(
      map((response) => {
        this.clientSubject.next(response);
      })
    );
  }
}
