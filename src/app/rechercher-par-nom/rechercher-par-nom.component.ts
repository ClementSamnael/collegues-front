import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
})

export class RechercherParNomComponent implements OnInit {

  matricules: string[];
  constructor(private _dataSvc: DataService) {
  }

  errorMatricule: boolean = false;
  errorCollegue: boolean = false;
  error500: boolean = false;

  ngOnInit() {
  }

  rechercherParNom(nom: string) {
    this._dataSvc.rechercherParNom(nom).
      subscribe(
        matriculesServeur => {
          this.matricules = matriculesServeur;
          if (this.matricules != null && this.matricules.length > 0) {
            this.errorCollegue = false;
            this.error500 = false;
          } else {
            this.errorCollegue = true;
          }
        }, (error: HttpErrorResponse) => {
          this.errorCollegue = true;
          this.error500 = true;
        });
  }

  selectionnerCollegue(matricule: string) {
    this._dataSvc.rechercherCollegueParMatricule(matricule).
      subscribe(
        collegue => {
          this._dataSvc.publierCollegue(collegue)
          if (this.matricules != null && this.matricules.length > 0) {
            this.errorMatricule = false;
          } else {
            this.errorMatricule = true;
          }
        }, (error: HttpErrorResponse) => {
          this.errorMatricule = true;
        });
  }



}
