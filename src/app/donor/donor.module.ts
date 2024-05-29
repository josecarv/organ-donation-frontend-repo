import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { DonorRoutingModule } from './donor-routing.module';



@NgModule({ 
  declarations: [
   DonorRegistrationComponent
  ], 
  imports: [
    DonorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [
    DatePipe,
  ],

})
export class DonorModule {}