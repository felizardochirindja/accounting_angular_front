import { Component } from '@angular/core';
import { AccountingService } from '../shared/accounting.service';
import { Invoice } from '../purchase/purchase.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.scss']
})
export class DiarioComponent {
  accountingBook$: Observable<Invoice[]> = this.accountingService.invoices$;

  constructor(
    private accountingService: AccountingService,
  ) {}
}
