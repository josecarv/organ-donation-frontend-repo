import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { MaterialModule } from '../shared/material.module';
import { MatDividerModule } from '@angular/material/divider';
import { FooterRoutingModule } from './footer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CopyrightComponent } from './copyright/copyright.component';




@NgModule({
  declarations: [
    DisclaimerComponent,
    CopyrightComponent,
    
  ],
  imports: [
    FooterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  ]
})
export class FooterModule { }
