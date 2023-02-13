import { AccountingService } from './../../shared/accounting.service';
import { CategoryType, Category } from './../category.types';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styles: [
  ]
})
export class CategoryEditComponent {
  @ViewChild('editCategoryForm') public editCategoryForm!: NgForm;

  categoryTypes: CategoryType[] = [
    CategoryType.Activo,
    CategoryType.Passivo,
    CategoryType.Rendimentos,
    CategoryType.Resultados,
    CategoryType.Capital,
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private accountingService: AccountingService,
  ) { }

  submitCategory() {
    // create category

    const category: Category = this.editCategoryForm.value;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
