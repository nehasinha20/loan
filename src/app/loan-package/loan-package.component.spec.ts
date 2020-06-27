import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPackageComponent } from './loan-package.component';

describe('LoanPackageComponent', () => {
  let component: LoanPackageComponent;
  let fixture: ComponentFixture<LoanPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
