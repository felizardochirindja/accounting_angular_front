import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNestedListComponent } from './account-nested-list.component';

describe('AccountNestedListComponent', () => {
  let component: AccountNestedListComponent;
  let fixture: ComponentFixture<AccountNestedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountNestedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountNestedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
