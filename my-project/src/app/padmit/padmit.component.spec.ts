import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadmitComponent } from './padmit.component';

describe('PadmitComponent', () => {
  let component: PadmitComponent;
  let fixture: ComponentFixture<PadmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadmitComponent]
    });
    fixture = TestBed.createComponent(PadmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
