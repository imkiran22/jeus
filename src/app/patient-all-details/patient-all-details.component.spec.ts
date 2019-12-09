import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAllDetailsComponent } from './patient-all-details.component';

describe('PatientAllDetailsComponent', () => {
  let component: PatientAllDetailsComponent;
  let fixture: ComponentFixture<PatientAllDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAllDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
