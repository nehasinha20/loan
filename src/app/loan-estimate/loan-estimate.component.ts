import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-estimate',
  templateUrl: './loan-estimate.component.html',
  styleUrls: ['./loan-estimate.component.css']
})
export class LoanEstimateComponent implements OnInit {

  controls: FormArray;
  entities = [
    { id: 1, feeCode: '100', feeAmount: 200, feePaid: 'Borrower',editMode:false },
    { id: 2, feeCode: '101', feeAmount: 300, feePaid: 'Borrower' ,editMode:false},
    { id: 3, feeCode: '102', feeAmount: 400, feePaid: 'Lender' ,editMode:false}
    ];
  constructor() { }

  ngOnInit() {

  }

  editForm(entity){
  	entity.editMode = true;
  }
  cancel(entity){
  	entity.editMode = false;
  }

  saveEntity(entity, index)
  {
  	this.entities[index] = entity;
  	console.log(entity);
  	entity.editMode = false;
  }
  

}
