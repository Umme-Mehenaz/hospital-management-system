import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleseinvoiceComponent } from './releseinvoice.component';

describe('ReleseinvoiceComponent', () => {
  let component: ReleseinvoiceComponent;
  let fixture: ComponentFixture<ReleseinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleseinvoiceComponent]
    });
    fixture = TestBed.createComponent(ReleseinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
