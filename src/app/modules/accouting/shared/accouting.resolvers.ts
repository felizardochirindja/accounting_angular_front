import { AccountingService } from './accounting.service';
import { Category } from './../category/category.types';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccoutingCategoriesResolver implements Resolve<Category[]> {
  constructor(
    private accountingService: AccountingService,
  ) {}

  resolve(): Observable<Category[]> {
    return this.accountingService.getCategories();
  }
}
