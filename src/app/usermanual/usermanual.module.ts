import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ImpNoticeComponent } from './imp-notice/imp-notice.component';
import { usermanualroutingmodule } from './usermanual-routing.module';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ImplinksComponent } from './implinks/implinks.component';



@NgModule({ 
  declarations: [
   ImpNoticeComponent,
   ContactinfoComponent,
   ImplinksComponent
  ], 
  imports: [
    usermanualroutingmodule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LayoutModule
    
  ],
  providers: [
    DatePipe,
  ],

})
export class DonorModule {}