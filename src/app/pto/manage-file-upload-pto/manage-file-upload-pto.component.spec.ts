import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFileUploadPtoComponent } from './manage-file-upload-pto.component';

describe('ManageFileUploadPtoComponent', () => {
  let component: ManageFileUploadPtoComponent;
  let fixture: ComponentFixture<ManageFileUploadPtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFileUploadPtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFileUploadPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
