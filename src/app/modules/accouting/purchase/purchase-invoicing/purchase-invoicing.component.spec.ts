import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoicingComponent } from './purchase-invoicing.component';

describe('PurchaseInvoicingComponent', () => {
  let component: PurchaseInvoicingComponent;
  let fixture: ComponentFixture<PurchaseInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseInvoicingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
