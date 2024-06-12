import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sideheader',
  templateUrl: './sideheader.component.html',
  styleUrls: ['./sideheader.component.css'],
 
})
export class SideheaderComponent  {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined ;
  @ViewChild(MatMenuTrigger)trigger!: MatMenuTrigger;
  @Output() sidenavClose = new EventEmitter();
  
  constructor( ) { }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  } 
  openMyMenu() {
    this.trigger.toggleMenu();
  } 
  closeMyMenu() {
    this.trigger.closeMenu();
  
  }  
}
