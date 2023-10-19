import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbillComponent } from './dbill.component';

describe('DbillComponent', () => {
  let component: DbillComponent;
  let fixture: ComponentFixture<DbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbillComponent]
    });
    fixture = TestBed.createComponent(DbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
