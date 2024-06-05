import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideheaderComponent } from './sideheader/sideheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { DonorRoutingModule } from './donor/donor-routing.module';
import { CommonModule } from '@angular/common'; 
import { FooterRoutingModule } from './footer/footer-routing.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    SideheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DonorRoutingModule,
    FooterRoutingModule,
    MaterialModule,
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
