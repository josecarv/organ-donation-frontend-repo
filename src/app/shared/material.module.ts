import {NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatListModule} from "@angular/material/list"
import {MatIconModule} from "@angular/material/icon"
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [   
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatDividerModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatStepperModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }