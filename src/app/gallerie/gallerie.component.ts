import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
})
export class GallerieComponent implements OnInit {

  photos:any[];

  constructor(private _dataSvc: DataService) { }

  ngOnInit() {
    this._dataSvc.photosGallerie().subscribe( photo => this.photos = photo);
  }

}
