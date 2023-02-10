import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceListComponent } from './product-service-list.component';

describe('ProductServiceListComponent', () => {
  let component: ProductServiceListComponent;
  let fixture: ComponentFixture<ProductServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
