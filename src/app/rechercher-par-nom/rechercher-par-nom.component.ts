import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Collegue } from '../model/Collegue';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
})

export class RechercherParNomComponent implements OnInit {

  matricules: string[];
  constructor(private _dataSvc: DataService) {
  }

  ngOnInit() {
  }

  rechercherParNom(nom: string) {
    this._dataSvc.rechercherParNom(nom).
      subscribe(
        matriculesServeur => {
          (this.matricules = matriculesServeur)
        });
  }

  selectionnerCollegue(matricule: string) {
    this._dataSvc.rechercherCollegueParMatricule(matricule).
      subscribe(
        collegue => {
          (this._dataSvc.publierCollegue(collegue))
        });
  }
}
