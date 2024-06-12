import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { MaterialModule } from '../shared/material.module';
import { FooterRoutingModule } from './footer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CopyrightComponent } from './copyright/copyright.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';


@NgModule({
  declarations: [
    DisclaimerComponent,
    CopyrightComponent,
    PrivatePolicyComponent,
    AccessibilityComponent,
    TermsOfUseComponent,
    
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
