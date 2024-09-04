import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartuploginComponent } from './startuplogin.component';

describe('StartuploginComponent', () => {
  let component: StartuploginComponent;
  let fixture: ComponentFixture<StartuploginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartuploginComponent]
    });
    fixture = TestBed.createComponent(StartuploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
