import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientinfoComponent } from './patientinfo.component';

describe('PatientinfoComponent', () => {
  let component: PatientinfoComponent;
  let fixture: ComponentFixture<PatientinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientinfoComponent]
    });
    fixture = TestBed.createComponent(PatientinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
