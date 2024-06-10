import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';;
import { usermanualroutingmodule } from './usermanual-routing.module';




@NgModule({ 
  declarations: [
  
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
export class usermanualModule {}