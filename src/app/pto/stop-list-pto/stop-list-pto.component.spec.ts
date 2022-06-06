import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopListPtoComponent } from './stop-list-pto.component';

describe('StopListPtoComponent', () => {
  let component: StopListPtoComponent;
  let fixture: ComponentFixture<StopListPtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopListPtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopListPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
