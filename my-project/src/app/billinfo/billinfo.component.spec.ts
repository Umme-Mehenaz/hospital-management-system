import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinfoComponent } from './billinfo.component';

describe('BillinfoComponent', () => {
  let component: BillinfoComponent;
  let fixture: ComponentFixture<BillinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillinfoComponent]
    });
    fixture = TestBed.createComponent(BillinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
