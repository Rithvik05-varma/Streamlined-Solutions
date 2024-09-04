import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsignupComponent } from './startsignup.component';

describe('StartsignupComponent', () => {
  let component: StartsignupComponent;
  let fixture: ComponentFixture<StartsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartsignupComponent]
    });
    fixture = TestBed.createComponent(StartsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
