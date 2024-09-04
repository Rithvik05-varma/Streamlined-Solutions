import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreesignupComponent } from './freesignup.component';

describe('FreesignupComponent', () => {
  let component: FreesignupComponent;
  let fixture: ComponentFixture<FreesignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreesignupComponent]
    });
    fixture = TestBed.createComponent(FreesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
