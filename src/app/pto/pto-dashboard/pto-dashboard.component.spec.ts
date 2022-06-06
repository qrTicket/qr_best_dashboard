import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoDashboardComponent } from './pto-dashboard.component';

describe('PtoDashboardComponent', () => {
  let component: PtoDashboardComponent;
  let fixture: ComponentFixture<PtoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
