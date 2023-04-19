import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tax-edit',
  templateUrl: './tax-edit.component.html',
  styles: [
  ]
})
export class TaxEditComponent {
  @ViewChild('editTaxForm') private editTaxForm!: NgForm;

  submitTax() {
    console.log(this.editTaxForm.value);
  }
}
