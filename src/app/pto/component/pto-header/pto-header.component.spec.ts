import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoHeaderComponent } from './pto-header.component';

describe('PtoHeaderComponent', () => {
  let component: PtoHeaderComponent;
  let fixture: ComponentFixture<PtoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
