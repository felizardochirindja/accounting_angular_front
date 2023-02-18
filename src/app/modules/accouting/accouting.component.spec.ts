import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutingComponent } from './accouting.component';

describe('AccoutingComponent', () => {
  let component: AccoutingComponent;
  let fixture: ComponentFixture<AccoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
