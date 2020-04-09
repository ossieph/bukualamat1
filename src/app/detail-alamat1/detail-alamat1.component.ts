import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-detail-alamat1',
  templateUrl: './detail-alamat1.component.html',
  styleUrls: ['./detail-alamat1.component.css']
})
export class DetailAlamat1Component implements OnInit {

  constructor(
  public dialogRef:MatDialogRef<DetailAlamat1Component>, @Inject(MAT_DIALOG_DATA) public data :any) {}

  ngOnInit() {
  }

}
