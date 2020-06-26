import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  constructor( private fb: FormBuilder ) {
    /*this.applFrmGroup = this.fb.group({
      loanApplicationDate: ['', Validators.required],
      applicationMode: ['']
    });*/
  }

  ngOnInit(): void {
  }

}
