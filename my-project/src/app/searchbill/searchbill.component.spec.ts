import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbillComponent } from './searchbill.component';

describe('SearchbillComponent', () => {
  let component: SearchbillComponent;
  let fixture: ComponentFixture<SearchbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbillComponent]
    });
    fixture = TestBed.createComponent(SearchbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
