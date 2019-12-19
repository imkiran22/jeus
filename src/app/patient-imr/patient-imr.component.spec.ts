import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientImrComponent } from './patient-imr.component';

describe('PatientImrComponent', () => {
  let component: PatientImrComponent;
  let fixture: ComponentFixture<PatientImrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientImrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientImrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
