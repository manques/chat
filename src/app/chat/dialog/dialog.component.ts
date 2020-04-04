import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChatComponent } from '../chat.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
  username;
  tab;
  constructor(private dialogRef: MatDialogRef<ChatComponent>) {
  }

  closer() {
    console.log('closer');
    this.username = '';
    this.dialogRef.close();
  }
}
