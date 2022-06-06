import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilePtoComponent } from './update-profile-pto.component';

describe('UpdateProfilePtoComponent', () => {
  let component: UpdateProfilePtoComponent;
  let fixture: ComponentFixture<UpdateProfilePtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfilePtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilePtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
