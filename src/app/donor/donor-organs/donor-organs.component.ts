import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donor-organs',
  templateUrl: './donor-organs.component.html',
  styleUrls: ['./donor-organs.component.css']
})
export class DonorOrgansComponent {
  DonorOrgansGroup!: FormGroup;
  
  constructor( private _formBuilder: FormBuilder,) {
    this.DonorOrgansGroup = this._formBuilder.group({
      donorCheckbox1Ctrl: false,
      donorCheckbox2Ctrl: false,
      donorCheckbox3Ctrl: false
    });
  }
}
