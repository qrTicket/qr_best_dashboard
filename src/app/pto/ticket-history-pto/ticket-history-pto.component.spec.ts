import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHistoryPtoComponent } from './ticket-history-pto.component';

describe('TicketHistoryPtoComponent', () => {
  let component: TicketHistoryPtoComponent;
  let fixture: ComponentFixture<TicketHistoryPtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketHistoryPtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketHistoryPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
