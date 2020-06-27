import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEstimateComponent } from './loan-estimate.component';

describe('LoanEstimateComponent', () => {
  let component: LoanEstimateComponent;
  let fixture: ComponentFixture<LoanEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
