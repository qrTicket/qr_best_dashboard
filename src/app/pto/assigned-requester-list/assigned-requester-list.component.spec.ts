import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedRequesterListComponent } from './assigned-requester-list.component';

describe('AssignedRequesterListComponent', () => {
  let component: AssignedRequesterListComponent;
  let fixture: ComponentFixture<AssignedRequesterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedRequesterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedRequesterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
