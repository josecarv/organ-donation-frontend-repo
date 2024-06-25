import { animate, state, style, transition, trigger } from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-donor-organs',
  templateUrl: './donor-organs.component.html',
  styleUrls: ['./donor-organs.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class DonorOrgansComponent {
  DonorOrgansGroup!: FormGroup;
  OrgansGroup!: FormGroup;
  disabled = false;


  flipStates :any= {
    kidney: 'inactive',
    bowel: 'inactive',
    pancreas: 'inactive',
    liver: 'inactive',
    lungs: 'inactive',
    heart: 'inactive',
    cartilage: 'inactive',
    valves: 'inactive',
    cornea: 'inactive',
    tissue: 'inactive',
    ligament: 'inactive',
    tendon: 'inactive'
  };
  
  constructor(private _formBuilder: FormBuilder,){
    this.DonorOrgansGroup = this._formBuilder.group({
      wantToBeDonor: [false],
      donateAllOrgans: [false],
      donateNoOrgans:[false],
    });
    this.OrgansGroup = this._formBuilder.group({
      
      kidneyStatusCtrl: ['',{value: false, disabled: false}],
      bowelStatusCtrl: ['',{value: false, disabled: false}],
      liverStatusCtrl:['',{value: false, disabled: false}],
      lungsStatusCtrl: ['',{value: false, disabled: false}],
      pancreasStatusCtrl: ['',{value: false, disabled: false}],
      heartStatusCtrl:['',{value: false, disabled: false}],
      cartilageStatusCtrl:['',{value: false, disabled: false}],
      valveStatusCtrl: ['',{value: false, disabled: false}],
      corneaStatusCtrl: ['',{value: false, disabled: false}],
      tissueStatusCtrl:['',{value: false, disabled: false}],
      ligamentStatusCtrl:['',{value: false, disabled: false}],
      tendonStatusCtrl:['',{value: false, disabled: false}],
    });
  }
  
  selectAll(event: any) {
    Object.keys(this.OrgansGroup.controls).forEach(control => {
      this.OrgansGroup.get(control)?.setValue(event.checked);
    });
  }

  toggleFlip(organ: string) {
    this.flipStates[organ] = this.flipStates[organ] === 'active' ? 'inactive' : 'active';
  }
  onWantToBeDonorChange(event: any) {
    if (event.checked) {
      this.DonorOrgansGroup.patchValue({
        donateNoOrgans: false,
      });
      this.DonorOrgansGroup.get('donateAllOrgans')?.setValue(true);
      this.selectAll(event);
    }else{
      this.DonorOrgansGroup.get('donateNoOrgans')?.setValue(true);
      Object.keys(this.OrgansGroup.controls).forEach(control => {
        this.OrgansGroup.get(control)?.setValue(false);
      });
      
    }
  }

  onDonateAllOrgans(event: any) {
    if (event.checked) {
      this.DonorOrgansGroup.patchValue({
        donateNoOrgans: false,
        wantToBeDonor:true,

      });
      Object.keys(this.OrgansGroup.controls).forEach(control => {
        this.OrgansGroup.get(control)?.setValue(true);
      });
      
    }
    else{
      Object.keys(this.OrgansGroup.controls).forEach(control => {
        this.OrgansGroup.get(control)?.setValue(false);
      });
  }
  }
  onDonateNoOrgans(event: any){
    if (event.checked) {
     
        this.DonorOrgansGroup.patchValue({
          wantToBeDonor: false,
          donateAllOrgans: false
        });
      
      this.DonorOrgansGroup.get('wantToBeDonor')?.setValue(false);
      Object.keys(this.OrgansGroup.controls).forEach(control => {
        this.OrgansGroup.get(control)?.setValue(false);
      });
      
    }
    else{
      this.DonorOrgansGroup.get('wantToBeDonor')?.setValue(true);
      this.DonorOrgansGroup.get('donateAllOrgans')?.setValue(true);
      this.selectAll(event);
    }

  }
}

