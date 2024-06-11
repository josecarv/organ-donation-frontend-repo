import { BreakpointObserver } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS, StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
     useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class DonorRegistrationComponent implements OnInit{
  isLinear =false; //if this make true, act like validation
  titleOption = 'option1';
  genderOption= 'option1';
  bloodGroupOption ='option1';
  firstFormGroup !: FormGroup;
  secondFormGroup !:FormGroup;
  thirdFormGroup! :FormGroup;
  StatusForm!: FormGroup;
  MailingForm!: FormGroup;
  disableDateField: boolean = true;
  isVisible = true;
  checked=false;
  stepperOrientation: Observable<StepperOrientation>;
  constructor (
    private _formBuilder:FormBuilder,
    private breakpointObserver: BreakpointObserver)
    {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));   
    
    }

    ngOnInit(){
    this.firstFormGroup = this._formBuilder.group({

   
    cardNumberCtrl: ['', Validators.required],
    nameCtrl: ['', Validators.required],
    surnameCtrl: ['', Validators.required],
   
    nationalityCtrl: ['', Validators.required],
   
  });
  this.secondFormGroup = this._formBuilder.group({
    
    emailCtrl: ['', Validators.required],
    telephoneCtrl: ['', Validators.required],
    mobileCtrl: ['', Validators.required],
    contactModeCtrl: ['', Validators.required],
   
  });
  this.thirdFormGroup = this._formBuilder.group({
    addressCtrl: ['', Validators.required],
    streetCtrl: ['', Validators.required],
    postcodeCtrl: ['', Validators.required],
    disableDateField : [false],
    mailaddressCtrl : [''],
    mailstreetCtrl : [''],
    mailpostcodeCtrl : [''],
    
  });
 
}

showOrHide(){
   this.isVisible = !this.isVisible;
}
}
 


