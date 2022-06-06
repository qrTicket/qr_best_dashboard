import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordPtoComponent } from './change-password-pto.component';

describe('ChangePasswordPtoComponent', () => {
  let component: ChangePasswordPtoComponent;
  let fixture: ComponentFixture<ChangePasswordPtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordPtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
