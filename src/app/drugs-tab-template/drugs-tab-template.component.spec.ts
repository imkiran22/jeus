import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsTabTemplateComponent } from './drugs-tab-template.component';

describe('DrugsTabTemplateComponent', () => {
  let component: DrugsTabTemplateComponent;
  let fixture: ComponentFixture<DrugsTabTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsTabTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsTabTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
