import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WTMComponent } from './wtm.component';

describe('WTMComponent', () => {
  let component: WTMComponent;
  let fixture: ComponentFixture<WTMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WTMComponent]
    });
    fixture = TestBed.createComponent(WTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
