import { TestBed } from '@angular/core/testing';

import { AccoutingCategoriesResolver } from './accouting.resolvers';

describe('AccoutingResolver', () => {
  let resolver: AccoutingCategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AccoutingCategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
