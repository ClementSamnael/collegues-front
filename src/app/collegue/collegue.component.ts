import { Component, OnInit, OnDestroy } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { DataService } from '../Services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})

export class CollegueComponent implements OnInit, OnDestroy {

  collegue: Collegue;

  isAvailable: boolean = false;
  actionSub: Subscription;

  constructor(private _dataSvc: DataService) {
  }

  ngOnInit() {
    this.actionSub = this._dataSvc
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

  ngOnDestroy() {
    this.actionSub.unsubscribe();
  }
}
