import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sideheader',
  templateUrl: './sideheader.component.html',
  styleUrls: ['./sideheader.component.css'],
 
})
export class SideheaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined ;
  @Output() sidenavClose = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  } 

}
