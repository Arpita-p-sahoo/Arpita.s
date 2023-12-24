import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebaqExpComponent } from './zebaq-exp.component';

describe('ZebaqExpComponent', () => {
  let component: ZebaqExpComponent;
  let fixture: ComponentFixture<ZebaqExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZebaqExpComponent]
    });
    fixture = TestBed.createComponent(ZebaqExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
