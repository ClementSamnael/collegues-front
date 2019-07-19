import { Component, OnInit, OnDestroy } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { DataService } from '../Services/data.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})

export class CollegueComponent implements OnInit, OnDestroy {

  collegue: Collegue = new Collegue();

  isAvailable: boolean = false;
  actionSub: Subscription;

  errorUpdate: boolean = false;

  ajoutCol: boolean = false;

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
        this.collegue.email = collegueUpdate.email;
        this.collegue.photoUrl = collegueUpdate.photoUrl;
        this.isAvailable = false;
      }, (error: HttpErrorResponse) => {
        this.errorUpdate = true;
      });
  }

  ajouterCollegue() {
    this.isAvailable = false;
    this.ajoutCol = true;
  }



  ngOnDestroy() {
    this.actionSub.unsubscribe();
  }
}
