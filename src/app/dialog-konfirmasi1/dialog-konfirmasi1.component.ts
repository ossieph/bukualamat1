import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-konfirmasi1',
  templateUrl: './dialog-konfirmasi1.component.html',
  styleUrls: ['./dialog-konfirmasi1.component.css']
})
export class DialogKonfirmasi1Component implements OnInit {

    constructor(public dialogRef:MatDialogRef<DialogKonfirmasi1Component>) {}
  konfirmasi()
  {
    	this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }

}

