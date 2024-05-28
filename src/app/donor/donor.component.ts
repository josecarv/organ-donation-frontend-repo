import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit{

  titleOption = 'option1';
  genderOption= 'option1';
  bloodGroupOption ='option1';
  firstFormGroup !: FormGroup;
  secondFormGroup !:FormGroup;
  thirdFormGroup! :FormGroup;
  
  constructor (
    private _formBuilder:FormBuilder){}

    ngOnInit(){
    this.firstFormGroup = this._formBuilder.group({

    ageCtrl: ['', Validators.required],
    cardNumberCtrl: ['', Validators.required],
    nameCtrl: ['', Validators.required],
    surnameCtrl: ['', Validators.required],
    localityCtrl: ['', Validators.required],
    postCodeCtrl: ['', Validators.required],
    addressCtrl: ['', Validators.required],
    professionCtrl: ['', Validators.required],
    fatherNameCtrl: ['', Validators.required],
    fatherSurnameCtrl: ['', Validators.required],
    motherNameCtrl: ['', Validators.required],
    motherSurnameCtrl: ['', Validators.required],
    spouseNameCtrl: ['', Validators.required],
    placeofBirthCtrl: ['', Validators.required],
    radioFatherCtrl: ['', Validators.required],
    radioMotherCtrl: ['', Validators.required],  
   
  });
  this.secondFormGroup = this._formBuilder.group({
    
    placeOfDeathCtrl: ['', Validators.required],
    causeOfDeathCtrl :  ['', Validators.required],
    burialPermitNoCtrl : ['', Validators.required],
    referenceNumberCtrl : ['', Validators.required],
    massTimeCtrl : ['', Validators.required],   
    
    
  });
  this.thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    ownerNameCtrl: ['', Validators.required],
    radioGraveCategoryCtrl : ['', Validators.required],  
  });
}
 
}
