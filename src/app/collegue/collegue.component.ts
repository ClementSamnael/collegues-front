import { Component, OnInit } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { DataService } from '../Services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})

export class CollegueComponent implements OnInit {

  collegue: Collegue;

  isAvailable: boolean = false;

  constructor(private _dataSvc: DataService) {
    this.collegue = _dataSvc.recupererCollegueCourant();
  }

  ngOnInit() {
    this._dataSvc
      .abonnementCollegue()
      .subscribe(colSelect => {
        (this.collegue = colSelect)
      });
  }

  modifier() {
    this.isAvailable = true;
    console.log(this.isAvailable);
  }

  ajouterCollegue() {
    console.log('Ajouter un collègue');
  }

  valider() {
    this.isAvailable = false;
  }
}
