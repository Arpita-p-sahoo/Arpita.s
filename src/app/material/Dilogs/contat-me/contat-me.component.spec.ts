import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatMeComponent } from './contat-me.component';

describe('ContatMeComponent', () => {
  let component: ContatMeComponent;
  let fixture: ComponentFixture<ContatMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatMeComponent]
    });
    fixture = TestBed.createComponent(ContatMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
