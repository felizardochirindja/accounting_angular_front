import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Category, Product, Supplier } from '../../shared/accouting.types';
import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../purchase.type';

@Component({
  selector: 'app-purchase-invoicing',
  templateUrl: './purchase-invoicing.component.html',
  styleUrls: ['./purchase-invoicing.component.scss']
})
export class PurchaseInvoicingComponent implements OnInit {
  openProducts: Product[] = [];
  productsFilteredByCategory: Product[] = [];
  invoices: Invoice[] = [];
  categories: Category[] = [];
  
  step!: number;
  proofPreviewImage!: string;
  
  categoryFilterField = new FormControl<Category | null>(null);
  supplierFormGroup = new FormGroup({
    invoiceFormArray: new FormArray([]),
  });

  constructor(
    private accountingService: AccountingService,
  ) {}

  get invoiceFormArray(): FormArray {
    return this.supplierFormGroup.get('invoiceFormArray') as FormArray
  }

  public ngOnInit(): void {
    this.accountingService.products$.subscribe(products => {
      this.openProducts = this.productsFilteredByCategory = products;
    });

    this.accountingService.categories$.subscribe(categories => {
      this.categories = categories;      
    });

    this.accountingService.invoices$.subscribe(invoices => {
      invoices.forEach(invoice => {
        this.invoiceFormArray.push(new FormGroup({
          invoiceCode: new FormControl<string | null>(null),
          totalToPay: new FormControl<number | null>({ value: invoice.toPay as number, disabled: true}),
          totalPaid: new FormControl<number | null>(null),
          remainigAmmount: new FormControl<number | null>({ value: invoice.remaining as number, disabled: true }),
          additionalCosts: new FormControl<number | null>(null),
          supplier: new FormControl<Supplier | null>(invoice.supplier as Supplier),
          category: new FormControl<Category | null>(invoice.category as Category),
        }));
      });
    });

    this.categoryFilterField.valueChanges.subscribe(category => {      
      this.productsFilteredByCategory = this.openProducts.filter(product => product.category?.id === category?.id);
    });

    this.accountingService.category$.subscribe(category => {
      this.categoryFilterField.setValue(category);
    });
  }

  nextStep() {
    if (this.step <= this.invoiceFormArray.length) this.step++;
  }

  prevStep() {
    if (this.step > 0) this.step--;
  }

  setStep(index: number) {
    this.step = index;
  }

  selectProofImage(event: any): void {
    const file = event.target.files[0];
    this.setProofPreviewImage(file, new FileReader);
  }

  setProofPreviewImage(file: File, fileReader: FileReader): void {
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      this.proofPreviewImage = fileReader.result as string;
    };
  }
}
