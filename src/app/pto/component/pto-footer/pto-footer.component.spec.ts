import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoFooterComponent } from './pto-footer.component';

describe('PtoFooterComponent', () => {
  let component: PtoFooterComponent;
  let fixture: ComponentFixture<PtoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
