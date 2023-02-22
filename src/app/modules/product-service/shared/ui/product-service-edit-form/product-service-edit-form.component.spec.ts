import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceEditFormComponent } from './product-service-edit-form.component';

describe('ProductServiceEditFormComponent', () => {
  let component: ProductServiceEditFormComponent;
  let fixture: ComponentFixture<ProductServiceEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServiceEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
