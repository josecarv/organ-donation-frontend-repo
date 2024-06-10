import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideheaderComponent } from './sideheader/sideheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DonorRoutingModule } from './donor/donor-routing.module';
import { CommonModule } from '@angular/common'; 
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';

import { ImpnoticeComponent } from './usermanual/impnotice/impnotice.component';
import { HomeComponent } from './home/home.component';
import { usermanualroutingmodule } from './usermanual/usermanual-routing.module';
import { ContactinfoComponent } from './usermanual/contactinfo/contactinfo.component';
import { KnowOrgandonationComponent } from './know-organdonation/know-organdonation.component';




@NgModule({
  declarations: [
    AppComponent,
    SideheaderComponent,
    HomeComponent,
    KnowOrgandonationComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DonorRoutingModule,
    usermanualroutingmodule,
    MaterialModule,
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
