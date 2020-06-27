import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
	 public blockFrmGroup: FormGroup;
   public model: NgbDateStruct;
  public date: {year: number, month: number};
  constructor( private fb: FormBuilder, private calendar: NgbCalendar) {
    
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  ngOnInit(): void {
  }

}
