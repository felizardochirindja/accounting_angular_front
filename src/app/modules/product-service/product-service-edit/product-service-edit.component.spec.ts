import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceEditComponent } from './product-service-edit.component';

describe('ProductServiceEditComponent', () => {
  let component: ProductServiceEditComponent;
  let fixture: ComponentFixture<ProductServiceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
