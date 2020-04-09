import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TambahAlamat1Component } from './tambah-alamat1/tambah-alamat1.component';
import { DetailAlamat1Component } from './detail-alamat1/detail-alamat1.component';
import { DialogKonfirmasi1Component } from './dialog-konfirmasi1/dialog-konfirmasi1.component';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog:MatDialog,
  public api:ApiService
   )
  {
  this.getData();
  }
	dataAlamat:any=[];
  	getData()
  {
    this.api.baca().subscribe(res=>{
      this.dataAlamat=res;
    })
  }

    buatAlamat()
 	 {
		const dialogRef = this.dialog.open(TambahAlamat1Component, {
			width: '450px',
			data:null     
		});
		dialogRef.afterClosed().subscribe(result => {
			   this.getData();  
		});
  	}

  	detailAlamat(item)
	  {
	    const dialogRef = this.dialog.open(DetailAlamat1Component, {
	      width: '450px',
	      data:item      
	    });	
	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');     
	    });
	  }
	editAlamat(data)
  	{
     const dialogRef = this.dialog.open(TambahAlamat1Component, {
      width: '450px',
      data:data
    });
     dialogRef.afterClosed().subscribe(result => {
      this.getData();    
      });
    }

	konfirmasiHapus(id)
 		{
		const dialogRef = this.dialog.open(DialogKonfirmasi1Component, {
			width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result == true)
			{
				console.log('Menghapus data');
					this.api.hapus(id).subscribe(res=>{
					this.getData();
					})
			}
		});
 		}
}
