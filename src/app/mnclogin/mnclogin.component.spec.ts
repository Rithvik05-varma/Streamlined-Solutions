import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MncloginComponent } from './mnclogin.component';

describe('MncloginComponent', () => {
  let component: MncloginComponent;
  let fixture: ComponentFixture<MncloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MncloginComponent]
    });
    fixture = TestBed.createComponent(MncloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
