import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStopListPtoComponent } from './route-stop-list-pto.component';

describe('RouteStopListPtoComponent', () => {
  let component: RouteStopListPtoComponent;
  let fixture: ComponentFixture<RouteStopListPtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStopListPtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStopListPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
