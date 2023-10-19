import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientupdComponent } from './patientupd.component';

describe('PatientupdComponent', () => {
  let component: PatientupdComponent;
  let fixture: ComponentFixture<PatientupdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientupdComponent]
    });
    fixture = TestBed.createComponent(PatientupdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
