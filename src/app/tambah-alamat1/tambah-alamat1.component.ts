import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-tambah-alamat1',
  templateUrl: './tambah-alamat1.component.html',
  styleUrls: ['./tambah-alamat1.component.css']
})
export class TambahAlamat1Component implements OnInit {
	data:any={};
	constructor(
    public api:ApiService, 
    public dialogRef:MatDialogRef<TambahAlamat1Component>,
    @Inject(MAT_DIALOG_DATA) public itemData:any
    )
    {
    	if(itemData != null)
      {
        this.data=itemData;
      }
    }
 	ngOnInit() {}
 	simpan(data)
 	{console.log(data);
 		if(data.id == undefined)
 		{
 		this.api.simpan(data).subscribe(res=>{
 			this.dialogRef.close(true);
 		});
 	}else{
 		this.api.ubah(data).subscribe(res=>{
 		this.dialogRef.close(true);
 		})
 		}
 	}

}
