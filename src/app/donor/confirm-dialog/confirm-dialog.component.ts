import { Component } from '@angular/core';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  constructor(public dialog: MatDialog,){}

  onRegisterDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
    
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
     
    });
  }
}
