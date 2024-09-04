import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreerequireComponent } from './freerequire.component';

describe('FreerequireComponent', () => {
  let component: FreerequireComponent;
  let fixture: ComponentFixture<FreerequireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreerequireComponent]
    });
    fixture = TestBed.createComponent(FreerequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
