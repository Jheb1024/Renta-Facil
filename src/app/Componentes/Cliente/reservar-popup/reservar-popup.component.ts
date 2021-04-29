import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservar-popup',
  templateUrl: './reservar-popup.component.html',
  styleUrls: ['./reservar-popup.component.css']
})
export class ReservarPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ReservarPopupComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
}

}
