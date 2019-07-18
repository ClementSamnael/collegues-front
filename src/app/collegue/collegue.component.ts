import { Component, OnInit, OnDestroy } from '@angular/core';
import { Collegue, UpdateCollegue } from '../model/Collegue';
import { DataService } from '../Services/data.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})

export class CollegueComponent implements OnInit, OnDestroy {

  collegue: Collegue;
  colleUpdate:UpdateCollegue;

  isAvailable: boolean = false;
  actionSub: Subscription;

  errorUpdate: boolean = false;

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
  }

  valider() {
    this._dataSvc.modifierCollegue(this.collegue).subscribe(
      collegueUpdate => {
        this.colleUpdate.matricule = collegueUpdate.matricule;
        this.colleUpdate.email = collegueUpdate.email;
        this.colleUpdate.photoUrl = collegueUpdate.photoUrl;
      }, (error: HttpErrorResponse) => {
        this.errorUpdate = true;
      }
    );
    this.isAvailable = false;
  }

  ajouterCollegue() {
    console.log('Ajouter un collègue');
  }

  ngOnDestroy() {
    this.actionSub.unsubscribe();
  }
}
