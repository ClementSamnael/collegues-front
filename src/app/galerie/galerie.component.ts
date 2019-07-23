import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
})
export class GalerieComponent implements OnInit {

  constructor(private _dataSvc:DataService) {
  }

  photos : any[];
  err:string;

  ngOnInit() {
    this._dataSvc.photosGallerie()
    .subscribe(photo => {
      this.photos = photo;
    }),(error:HttpErrorResponse) => {
      this.err = error.status + ' - ' + error.error;
    }
  }

}
