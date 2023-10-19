import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreleaseComponent } from './prelease.component';

describe('PreleaseComponent', () => {
  let component: PreleaseComponent;
  let fixture: ComponentFixture<PreleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreleaseComponent]
    });
    fixture = TestBed.createComponent(PreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
