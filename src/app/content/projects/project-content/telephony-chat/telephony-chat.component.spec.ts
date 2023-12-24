import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonyChatComponent } from './telephony-chat.component';

describe('TelephonyChatComponent', () => {
  let component: TelephonyChatComponent;
  let fixture: ComponentFixture<TelephonyChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelephonyChatComponent]
    });
    fixture = TestBed.createComponent(TelephonyChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
