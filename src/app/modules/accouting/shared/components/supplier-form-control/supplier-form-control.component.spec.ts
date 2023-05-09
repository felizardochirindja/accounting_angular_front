import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFormControlComponent } from './supplier-form-control.component';

describe('SupplierFormControlComponent', () => {
  let component: SupplierFormControlComponent;
  let fixture: ComponentFixture<SupplierFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
