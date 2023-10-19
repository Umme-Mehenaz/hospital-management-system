import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Administrator1Component } from './administrator1.component';

describe('Administrator1Component', () => {
  let component: Administrator1Component;
  let fixture: ComponentFixture<Administrator1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Administrator1Component]
    });
    fixture = TestBed.createComponent(Administrator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
