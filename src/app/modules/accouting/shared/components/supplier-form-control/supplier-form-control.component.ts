import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../../accouting.types';
import { map, startWith, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AccountingService } from '../../accounting.service';

@Component({
  selector: 'app-supplier-form-control',
  template: `
    <mat-form-field appearance="outline" class="w-full">
      <mat-label>fornecedor</mat-label>
      <input type="text" matInput [matAutocomplete]="supplierAutoComplete" [formControl]="supplierControl" [disabled]="disabled">
      <mat-autocomplete #supplierAutoComplete="matAutocomplete" [displayWith]="displaySupplierName">
        <mat-option *ngFor="let supplier of suppliers" [value]="supplier">{{ supplier.name }}</mat-option>
        <mat-option *ngIf="suppliers.length === 0 || canDisplayCreateSupplierButton">
          <button mat-raised-button (click)="createSupplier()">Criar</button>
        </mat-option>
      </mat-autocomplete>
      <mat-error *ngIf="supplierControl.hasError('required')">o fornecedor é obrigatório</mat-error>
    </mat-form-field>
  `,
})
export class SupplierFormControlComponent implements OnInit {
  @Input() supplierControl!: FormControl<Supplier | null>;
  @Input() disabled: boolean = false;

  suppliers: Supplier[] = [];

  canDisplayCreateSupplierButton: boolean = false;

  constructor(
    private accountingService: AccountingService
  ) { }

  ngOnInit(): void {
    this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(supplier => typeof supplier === 'string' ?
        supplier.toLocaleLowerCase() as string :
        supplier?.name?.toLocaleLowerCase() as string
      ),
      switchMap(supplierName => this.accountingService.suppliers$.pipe(
        map(suppliers => {
          const filteredSuppliers: Supplier[] = suppliers.filter(
            supplier => supplier.name?.toLocaleLowerCase().includes(supplierName)
          );

          this.canDisplayCreateSupplierButton = filteredSuppliers.some(supplier => supplier.name?.toLocaleLowerCase() !== supplierName) && supplierName !== '';

          return filteredSuppliers;
        }),
      )),
    ).subscribe(filteredSuppliers => {
      this.suppliers = filteredSuppliers;
    });
  }

  displaySupplierName(supplier: Supplier): string {
    return supplier ? supplier.name as string : '';
  }

  createSupplier(): void {
    const supplier: Supplier = {
      name: this.supplierControl.value as string
    };
    
    this.accountingService.createSupplier(supplier).subscribe((supplierResponse) => {
      this.supplierControl.patchValue(supplierResponse);
    });
  }
}
