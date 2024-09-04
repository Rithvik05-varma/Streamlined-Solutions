import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MncComponent } from './mnc.component';

describe('MncComponent', () => {
  let component: MncComponent;
  let fixture: ComponentFixture<MncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MncComponent]
    });
    fixture = TestBed.createComponent(MncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
