import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosComponent } from './formularios.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormulariosComponent', () => {
  let component: FormulariosComponent;
  let fixture: ComponentFixture<FormulariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosComponent ],
      imports: [FormsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have sexs', () => {
    expect(component.sexos).toEqual([ 'Hombre', 'Mujer', 'Otros']);
  });
});
