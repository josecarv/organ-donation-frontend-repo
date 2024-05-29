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
    MatSelectModule,
    FlexLayoutModule,
  ]
})
export class MaterialModule { }
