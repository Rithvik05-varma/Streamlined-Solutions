import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MncsingupComponent } from './mncsingup.component';

describe('MncsingupComponent', () => {
  let component: MncsingupComponent;
  let fixture: ComponentFixture<MncsingupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MncsingupComponent]
    });
    fixture = TestBed.createComponent(MncsingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
