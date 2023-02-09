import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonComponent } from './skeleton.component';

describe('SkeletonComponent', () => {
  let skeletonComponent: SkeletonComponent;
  let skeletonComponentFixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    skeletonComponentFixture = TestBed.createComponent(SkeletonComponent);
    skeletonComponent = skeletonComponentFixture.componentInstance;
  });

  it('should create', () => {
    skeletonComponentFixture.detectChanges();
    expect(skeletonComponent).toBeTruthy();
  });
});
