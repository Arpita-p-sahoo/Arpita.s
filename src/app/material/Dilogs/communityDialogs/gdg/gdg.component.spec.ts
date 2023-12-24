import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GDGComponent } from './gdg.component';

describe('GDGComponent', () => {
  let component: GDGComponent;
  let fixture: ComponentFixture<GDGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GDGComponent]
    });
    fixture = TestBed.createComponent(GDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
