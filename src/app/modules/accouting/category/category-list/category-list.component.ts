import { Category } from './../category.types';
import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: [
  ]
})
export class CategoryListComponent implements OnInit {
  public categories: Category[] = [];

  constructor(
    private accountingService: AccountingService,
  ) {}

  ngOnInit(): void {
    this.accountingService.categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }
}
