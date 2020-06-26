import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
	 public blockFrmGroup: FormGroup;
  constructor( private fb: FormBuilder ) {
    this.blockFrmGroup = this.fb.group({
      blockName: ['', Validators.required],
      partyName: [''],
      length: [''],
      width: [''],
      height: [''],
      description: [''],
      entryDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
