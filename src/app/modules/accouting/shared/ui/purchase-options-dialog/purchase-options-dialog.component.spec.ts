import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOptionsDialogComponent } from './purchase-options-dialog.component';

describe('PurchaseOptionsDialogComponent', () => {
  let component: PurchaseOptionsDialogComponent;
  let fixture: ComponentFixture<PurchaseOptionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOptionsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
