import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
})
export class ConnexionComponent implements OnInit {

  nonIdentifier: boolean = false;

  constructor(private _dataSvc: DataService) { }

  ngOnInit() {
    this.nonIdentifier = false;
  }

  nonConnecter() {
    this.nonIdentifier = !this.nonIdentifier;
  }

  connexion(login: string, motDePasse: string) {
    this._dataSvc.authentifier(login, motDePasse)
      .subscribe(() => this.nonIdentifier = true);
  }

}
