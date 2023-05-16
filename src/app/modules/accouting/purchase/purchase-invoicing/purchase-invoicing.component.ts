import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Product, Supplier } from '../../shared/accouting.types';
import { AccountingService } from './../../shared/accounting.service';
import { Component, OnInit } from '@angular/core';
import { Invoice, PurchasePaymentMethod } from '../purchase.type';

@Component({
  selector: 'app-purchase-invoicing',
  templateUrl: './purchase-invoicing.component.html',
  styleUrls: ['./purchase-invoicing.component.scss']
})
export class PurchaseInvoicingComponent implements OnInit {
  products: Product[] = [];
  invoices: Invoice[] = [];
  paymentMethods: PurchasePaymentMethod[] = [];
  
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
    this.accountingService.purchasePaymentMethods$.subscribe(paymentMethods => {
      this.paymentMethods = paymentMethods;      
    });

    this.accountingService.invoices$.subscribe(invoices => {
      invoices.forEach(invoice => {
        this.invoiceFormArray.push(new FormGroup({
          id: new FormControl<string | null>(invoice.id as string, Validators.required),
          invoiceCode: new FormControl<string | null>(null, Validators.required),
          totalToPay: new FormControl<number | null>({ value: invoice.toPay as number, disabled: true}, Validators.required),
          additionalCosts: new FormControl<number | null>(null),
          supplier: new FormControl<Supplier | null>(invoice.supplier as Supplier, Validators.required),
          category: new FormControl<Category | null>(invoice.category as Category, Validators.required),
          paymentMethod: new FormControl<PurchasePaymentMethod | null>(null, Validators.required),
        }));
      });
    });

    this.categoryFilterField.valueChanges.pipe(
      switchMap(category => this.accountingService.products$.pipe(
        map(products => products.filter(product => product.category?.id === category?.id)),
      )),
    ).subscribe(products => {
      this.products = products;
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

  closeCategory(): void {
    console.log(this.categoryFilterField.value);
  }

  finishInvoice(invoice: Invoice): void {
    console.log(invoice);
  }
}
