import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEVFESTComponent } from './devfest.component';

describe('DEVFESTComponent', () => {
  let component: DEVFESTComponent;
  let fixture: ComponentFixture<DEVFESTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DEVFESTComponent]
    });
    fixture = TestBed.createComponent(DEVFESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
