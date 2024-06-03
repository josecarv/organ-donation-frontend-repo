import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { MaterialModule } from '../shared/material.module';
import { FooterRoutingModule } from './footer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CopyrightComponent } from './copyright/copyright.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';


@NgModule({
  declarations: [
    DisclaimerComponent,
    CopyrightComponent,
    PrivatePolicyComponent,
    AccessibilityComponent,
    
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
