import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from './../account.types';
import { Component, OnInit } from '@angular/core';
import { AccountingService } from '../../shared/accounting.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styles: [
  ]
})
export class AccountEditComponent implements OnInit {
  public accounts: Account[] = [];

  constructor(
    private accountingService: AccountingService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.accountingService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    })
  }

  getCodeControlErrorMessage(codeControl: NgModel): string {
    if (codeControl.hasError('required')) {
      return 'O código é obrigatótio';
    }

    return '';
  }

  submitAccount(): void {
    this.router.navigate(['/inicio/contabilidade/plano-de-contas']);
  }
}
