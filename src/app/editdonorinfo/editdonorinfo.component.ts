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
import { IDonorDto } from 'src/app/models/DonorDto.model';


@Component({
  selector: 'app-donor-registration',
  templateUrl: './editdonorinfo.component.html',
  styleUrls: ['./editdonorinfo.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
     useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class EditdonorinfoComponent implements OnInit{
onChangeMailingAddress() {
throw new Error('Method not implemented.');
}

  // genderOption= 'option1';
  // bloodGroupOption ='option1';
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
  
editdonorinfoObject :IDonorDto ={
  
    idCardNumber :'',
    titleType:'',
    firstName :'',
    lastName :'',
    bloodGroupId :0,
    dateOfBirth :new Date(), 
    address: '',
    street:'',
    postcode:'',
    localityId:0,
    mailAddress: '',
    mailStreet:'',
    mailPostcode:'',
    mailLocalityId:0,
    email:'',
    telephone:0,
    mobile:0,
    nationalityId :0,
    genderId: 0,
    checkboxAddress:'',
    preferredContact:0,
    organs:[],

}

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
    idcardCtrl: [this.editdonorinfoObject.idCardNumber, Validators.required],
    titleTypeCtrl: [this.editdonorinfoObject.titleType, Validators.required],
    nameCtrl: [this.editdonorinfoObject.firstName, Validators.required],
    surnameCtrl: [this.editdonorinfoObject.lastName, Validators.required],
    dateOfBirthCtrl: [this.editdonorinfoObject.dateOfBirth, Validators.required],
    genderCtrl: [this.editdonorinfoObject.genderId, Validators.required],
    bloodGroupCtrl: [this.editdonorinfoObject.bloodGroupId, Validators.required],
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
    disableAddressField : [''],
    mailaddressCtrl: ['', Validators.required],
    mailstreetCtrl : ['', Validators.required],
    mailpostcodeCtrl: ['', Validators.required],
    maillocalityCtrl: ['', Validators.required],
    
  });
  this.subscribeChanges();
}
subscribeChanges() {

  //FirstFormGroup
  this.firstFormGroup.get('idcardCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.idCardNumber = value;
  });
  this.firstFormGroup.get('titleTypeCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.titleType = value;
  });
  this.firstFormGroup.get('nameCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.firstName = value;
  });
  this.firstFormGroup.get('surnameCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.lastName = value;
  });
  this.firstFormGroup.get('dateOfBirthCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.dateOfBirth = value;
  });
  this.firstFormGroup.get('genderCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.genderId = value;
  });
  this.firstFormGroup.get('bloodGroupCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.bloodGroupId = value;
  });
  this.firstFormGroup.get('nationalityCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.nationalityId = value;
  });

    //SecondFormGroup
  this.secondFormGroup.get('emailCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.email = value;      
  });
  this.secondFormGroup.get('telephoneCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.telephone = value;      
  });
  this.secondFormGroup.get('mobileCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.mobile = value;      
  });
  this.secondFormGroup.get('contactModeCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.preferredContact = value;      
  });

   //ThirdFormGroup
  this.thirdFormGroup.get('addressCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.address = value;      
  });
  this.thirdFormGroup.get('streetCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.street = value;      
  });
  this.thirdFormGroup.get('postcodeCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.postcode = value;      
  });
  this.thirdFormGroup.get('localityCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.localityId = value;      
  });
  this.thirdFormGroup.get('disableAddressField')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.checkboxAddress = value;      
  });
  this.thirdFormGroup.get('mailaddressCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.mailAddress = value;      
  });
  this.thirdFormGroup.get('mailstreetCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.mailStreet = value;      
  });
  this.thirdFormGroup.get('mailpostcodeCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.mailPostcode = value;      
  });
  this.thirdFormGroup.get('maillocalityCtrl')?.valueChanges.subscribe((value) => {     
    this.editdonorinfoObject.mailLocalityId = value;      
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
 


