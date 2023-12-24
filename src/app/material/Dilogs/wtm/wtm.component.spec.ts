import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtmComponent } from './wtm.component';

describe('WtmComponent', () => {
  let component: WtmComponent;
  let fixture: ComponentFixture<WtmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WtmComponent]
    });
    fixture = TestBed.createComponent(WtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
