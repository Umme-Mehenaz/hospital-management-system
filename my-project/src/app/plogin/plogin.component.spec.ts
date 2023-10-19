import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PloginComponent } from './plogin.component';

describe('PloginComponent', () => {
  let component: PloginComponent;
  let fixture: ComponentFixture<PloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PloginComponent]
    });
    fixture = TestBed.createComponent(PloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
