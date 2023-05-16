import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonComponent } from './skeleton.component';

describe('SkeletonComponent', () => {
  let skeletonComponent: SkeletonComponent;
  let skeletonComponentFixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
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
