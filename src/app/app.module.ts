import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideheaderComponent } from './sideheader/sideheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, DatePipe } from '@angular/common';
import { KnowOrgandonationComponent } from './know-organdonation/know-organdonation.component';
import { HomeComponent } from './home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonorRoutingModule } from './donor/donor-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { usermanualroutingmodule } from './usermanual/usermanual.routing.module';




@NgModule({
  declarations: [
    AppComponent,
    SideheaderComponent,
    KnowOrgandonationComponent,
    HomeComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DonorRoutingModule,
    MaterialModule,
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    usermanualroutingmodule 

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
