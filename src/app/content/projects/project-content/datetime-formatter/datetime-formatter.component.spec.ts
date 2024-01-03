import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeFormatterComponent } from './datetime-formatter.component';

describe('DatetimeFormatterComponent', () => {
  let component: DatetimeFormatterComponent;
  let fixture: ComponentFixture<DatetimeFormatterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatetimeFormatterComponent]
    });
    fixture = TestBed.createComponent(DatetimeFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
