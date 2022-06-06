import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoSidebarComponent } from './pto-sidebar.component';

describe('PtoSidebarComponent', () => {
  let component: PtoSidebarComponent;
  let fixture: ComponentFixture<PtoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
