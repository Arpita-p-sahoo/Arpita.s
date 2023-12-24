import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisExpComponent } from './vis-exp.component';

describe('VisExpComponent', () => {
  let component: VisExpComponent;
  let fixture: ComponentFixture<VisExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisExpComponent]
    });
    fixture = TestBed.createComponent(VisExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
