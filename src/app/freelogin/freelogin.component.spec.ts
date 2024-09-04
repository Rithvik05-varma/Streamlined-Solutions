import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeloginComponent } from './freelogin.component';

describe('FreeloginComponent', () => {
  let component: FreeloginComponent;
  let fixture: ComponentFixture<FreeloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeloginComponent]
    });
    fixture = TestBed.createComponent(FreeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
