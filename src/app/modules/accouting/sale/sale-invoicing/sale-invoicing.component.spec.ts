import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInvoicingComponent } from './sale-invoicing.component';

describe('SaleInvoicingComponent', () => {
  let component: SaleInvoicingComponent;
  let fixture: ComponentFixture<SaleInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleInvoicingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
