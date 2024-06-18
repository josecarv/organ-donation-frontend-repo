import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideheaderComponent } from './sideheader/sideheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, DatePipe } from '@angular/common';
import { KnowOrgandonationComponent } from './know-organdonation/know-organdonation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonorRoutingModule } from './donor/donor-routing.module';
import { FooterRoutingModule } from './footer/footer-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { usermanualroutingmodule } from './usermanual/usermanual.routing.module';
import { EditdonorinfoComponent} from './editdonorinfo/editdonorinfo.component';

import { MatTableModule } from '@angular/material/table';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs'; 




@NgModule({
  declarations: [
    AppComponent,
    SideheaderComponent,
    KnowOrgandonationComponent,

    
    HomeComponent,
    EditdonorinfoComponent,

    
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
    BrowserAnimationsModule,
    usermanualroutingmodule, 
    HttpClientModule,
    MatTableModule ,
    MatFormFieldModule,
    MatTabsModule 
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
