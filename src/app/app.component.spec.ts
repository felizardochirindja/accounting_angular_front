import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('#AppComponent', () => {
  let appComponentFixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    appComponentFixture = TestBed.createComponent(AppComponent);
    appComponent = appComponentFixture.componentInstance;
  })

  it('should create the app', () => {
    appComponentFixture.detectChanges();
    expect(appComponent).toBeTruthy();
  });
});
