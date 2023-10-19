import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbinfoComponent } from './searchbinfo.component';

describe('SearchbinfoComponent', () => {
  let component: SearchbinfoComponent;
  let fixture: ComponentFixture<SearchbinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbinfoComponent]
    });
    fixture = TestBed.createComponent(SearchbinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
