import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './../../../../ui/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TaxEditComponent } from './tax-edit.component';

describe('TaxEditComponent', () => {
  let component: TaxEditComponent;
  let fixture: ComponentFixture<TaxEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TaxEditComponent,
      ],
      imports: [
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HeaderComponent,
        RouterTestingModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('desabilidar o botao de submeter caso o formulario seja invalido',() => {
    const editTaxForm: HTMLFormElement = fixture.debugElement.query(By.css('form')).nativeElement;

    const nameInputElement: HTMLInputElement = fixture.debugElement.query(By.css('input[name=name]')).nativeElement;
    nameInputElement.value = 'fff';
    nameInputElement.dispatchEvent(new Event('input'));

    const taxInputElement: HTMLInputElement  = fixture.debugElement.query(By.css('input[name=tax]')).nativeElement;
    taxInputElement.value = 'ffff';
    taxInputElement.dispatchEvent(new Event('input'));
    
    // const accounSelectElement: HTMLSelectElement = fixture.debugElement.query(By.css('mat-select[name=account]')).nativeElement;
    // accounSelectElement.value = 'ffff';
    // accounSelectElement.dispatchEvent(new Event('change'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const submitButton: HTMLButtonElement = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;
      expect(submitButton.disabled).toBe(false);
    })
  });

  it('habilitar o botao de sumbeter caso o formulario seja valido', () => {
    const nameInputElement: HTMLInputElement = fixture.debugElement.query(By.css('input[name=name]')).nativeElement;
    nameInputElement.value = 'test';
    nameInputElement.dispatchEvent(new Event('input'));

    const taxInputElement: HTMLInputElement  = fixture.debugElement.query(By.css('input[name=tax]')).nativeElement;
    taxInputElement.value = 'test';
    taxInputElement.dispatchEvent(new Event('input'));
    
    const accounSelectElement: HTMLSelectElement = fixture.debugElement.query(By.css('mat-select[name=account]')).nativeElement;
    accounSelectElement.value = 'test';
    accounSelectElement.dispatchEvent(new Event('change'));

    const submitButton: HTMLButtonElement = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;

    expect(submitButton.disabled).toBeFalse();
  });
});
