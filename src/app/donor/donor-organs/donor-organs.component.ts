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
  // donateAllOrgans = false;
  // donateNoOrgans = false;
  // selectAllOrgans = false;
  OrgansGroup!: FormGroup;


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
      kidneyStatusCtrl: [''],
      bowelStatusCtrl:[''],
      pancreasStatusCtrl:[''],
      liverStatusCtrl: [''],
      lungsStatusCtrl: [''],
      heartStatusCtrl: [''],
      cartilageStatusCtrl: [''],
      valveStatusCtrl: [''],
      corneaStatusCtrl: [''],
      tissueStatusCtrl: [''],
      ligamentStatusCtrl: [''],
      tendonStatusCtrl: [''],
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
        donateNoOrgans: false
      });
      this.DonorOrgansGroup.get('donateAllOrgans')?.setValue(true);
      this.selectAll(event);
    }else{
      this.DonorOrgansGroup.get('donateNoOrgans')?.setValue(true);
      
    }
  }

  onDonateAllOrgans(event: any) {
    if (event.checked) {
      this.DonorOrgansGroup.get('wantToBeDonor')?.setValue(true);
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

  }
}

