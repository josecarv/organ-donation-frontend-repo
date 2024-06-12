import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-donor-organs',
  templateUrl: './donor-organs.component.html',
  styleUrls: ['./donor-organs.component.css']
})
export class DonorOrgansComponent {
  DonorOrgansGroup!: FormGroup;

  constructor( private _formBuilder: FormBuilder,) {
    this.DonorOrgansGroup = this._formBuilder.group({
      kidneyStatusCtrl: [''],
      bowelStatusCtrl: [''],
      pancreasStatusCtrl: [''],
      liverStatusCtrl: [''],
      lungsStatusCtrl: [''],
      heartStatusCtrl: [''],
      cartilageStatusCtrl: [''],
      valvesStatusCtrl: [''],
      corneaStatusCtrl: [''],
      tissueStatusCtrl: [''],
      ligamentStatusCtrl: [''],
      tendonStatusCtrl: [''],
    });
  }
  onCheckboxChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.DonorOrgansGroup.patchValue({
        kidneyStatusCtrl: true,
        bowelStatusCtrl: true,
        pancreasStatusCtrl: true,
        liverStatusCtrl: true,
        lungsStatusCtrl: true,
        heartStatusCtrl: true,
        cartilageStatusCtrl: true,
        valvesStatusCtrl: true,
        corneaStatusCtrl: true,
        tissueStatusCtrl: true,
        ligamentStatusCtrl: true,
        tendonStatusCtrl: true
      });
    } else {
      this.DonorOrgansGroup.patchValue({
        kidneyStatusCtrl: false,
        bowelStatusCtrl: false,
        pancreasStatusCtrl: false,
        liverStatusCtrl: false,
        lungsStatusCtrl: false,
        heartStatusCtrl: false,
        cartilageStatusCtrl: false,
        valvesStatusCtrl: false,
        corneaStatusCtrl: false,
        tissueStatusCtrl: false,
        ligamentStatusCtrl: false,
        tendonStatusCtrl: false
      });
    }
  }
}
