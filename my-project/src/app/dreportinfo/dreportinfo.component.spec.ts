import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreportinfoComponent } from './dreportinfo.component';

describe('DreportinfoComponent', () => {
  let component: DreportinfoComponent;
  let fixture: ComponentFixture<DreportinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreportinfoComponent]
    });
    fixture = TestBed.createComponent(DreportinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
