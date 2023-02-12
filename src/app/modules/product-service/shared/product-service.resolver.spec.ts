import { TestBed } from '@angular/core/testing';

import { ProductServiceResolver } from './product-service.resolver';

describe('ProductServiceResolver', () => {
  let resolver: ProductServiceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductServiceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
