import { BreakpointObserver } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS, StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILocalityDto } from 'src/app/models/LocalityDto.model';
import { LocalityService } from 'src/app/services/locality.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IGenderDto } from 'src/app/models/Gender.model';
import { GenderService } from 'src/app/services/gender.service';
import { IBloodGroupDto } from 'src/app/models/BloodGroup.model';
import { BloodgroupService } from 'src/app/services/bloodgroup.service';
import { INationalityDto } from 'src/app/models/Nationality.model';
import { NationalityService } from 'src/app/services/nationality.service';


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

  genderOption= 'option1';
  bloodGroupOption ='option1';
  localities:ILocalityDto[]=[];
  genders:IGenderDto[]=[]; 
  nationalities:INationalityDto[]=[];
  bloodGroups:IBloodGroupDto[]=[];
  firstFormGroup !: FormGroup;
  secondFormGroup !:FormGroup;
  thirdFormGroup! :FormGroup;
  StatusForm!: FormGroup;
  MailingForm!: FormGroup;
  disableDateField: boolean = true;
  isVisible = true;
  checked=false;
  selectedLocalityDescription!: string;
  selectedGenderDescription!: string;
  selectedBloodGroupDescription!: string;
  selectedNationalityDescription!: string;
  stepperOrientation: Observable<StepperOrientation>;
  
  constructor (
    private localityService:LocalityService,
    private _formBuilder:FormBuilder,
    private genderService:GenderService,
    private nationalityService:NationalityService,
    private bloodGroupService:BloodgroupService,
    private breakpointObserver: BreakpointObserver,){
      this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));   
  
  }
  
    ngOnInit(){
    this.getAllLocalities();
    this.getAllGender();
    this.getAllBloodGroups();
    this.getAllNationalities();

    this.firstFormGroup = this._formBuilder.group({
    cardNumberCtrl: ['', Validators.required],
    titleTypeCtrl: ['', Validators.required],
    nameCtrl: ['', Validators.required],
    surnameCtrl: ['', Validators.required],
    dateOfBirthCtrl: ['', Validators.required],
    genderCtrl: ['', Validators.required],
    bloodGroupCtrl: ['', Validators.required],
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
    localityCtrl: ['', Validators.required],
    disableDateField : [false],
    mailaddressCtrl: ['', Validators.required],
    mailstreetCtrl : ['', Validators.required],
    mailpostcodeCtrl: ['', Validators.required],
    maillocalityCtrl: ['', Validators.required],
    
  });
 
}
dateFilter = (d: Date | null): boolean => {
  if (!d) {
    return false; 
  }  
  const today = new Date();
  today.setDate(today.getDate() );  
  return !(d > today);
};

getAllLocalities(){
  this.localityService.getAllLocalities().subscribe(
    (response: ILocalityDto[]) => {
      this.localities = response;          
    },
    (error) => {        
      console.error('Error adding localities: ', error);        
    }
    );
}
getAllGender(){
  this.genderService.getAllGender().subscribe(
    (response: IGenderDto[]) => {
      this.genders = response;        
    },
    (error) => {        
      console.error('Error retrieving genders: ', error);        
    }
    );
}
getAllBloodGroups(){
  this.bloodGroupService.getAllBloodGroup().subscribe(
    (response: IBloodGroupDto[]) => {
      this.bloodGroups = response;        
    },
    (error) => {        
      console.error('Error retrieving blood groups: ', error);        
    }
    );
}
getAllNationalities(){
  this.nationalityService.getAllNationalities().subscribe(
    (response: INationalityDto[]) => {
      this.nationalities = response;          
    },
    (error) => {        
      console.error('Error adding nationalities: ', error);        
    }
    );
}
onLocalitySelectionChange(event: any) {
  const selectedLocalityId = event.value;
  const selectedLocality = this.localities.find(loc => loc.id === selectedLocalityId);    
  this.selectedLocalityDescription = selectedLocality ? selectedLocality.name: '';
  // this.donorObject.locality = selectedLocality ? selectedLocality.description : '';
}
onGenderSelectionChange() {
  // const selectedGenderId = this.donorObject.genderId;
  // const selectedGender = this.genders.find(g => g.id === selectedGenderId);    
  // this.selectedGenderDescription = selectedGender ? selectedGender.description : '';
  // this.donorObject.gender = selectedGender ? selectedGender.description : '';
}
onBloodSelectionChange(){
   // const selectedBloodId = this.donorObject.bloodGroupId;
  // const selectedBloodGroup = this.bloodGroups.find(blood => blood.id === selectedBloodId);    
  // this.selectedBloodGroupDescription = selectedBloodGroup ? selectedGender.description : '';
  // this.donorObject.bloodgroup = selectedBloodGroup ? selectedBloodGroup.description : '';
}
onNationalitySelectionChange() {
  // const selectedNationalityId = this.donorObject.genderId;
  // const selectedNationality = this.localities.find(nation => nation.id === selectedNationalityId);    
  // this.selectedNationalityDescription = selectedNationality ? selectedNationality.name: '';
  // this.donorObject.locality = selectedLocality ? selectedLocality.description : '';
}
showOrHide(){
   this.isVisible = !this.isVisible;
}
}
 


