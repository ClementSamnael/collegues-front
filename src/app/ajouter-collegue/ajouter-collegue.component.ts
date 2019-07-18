import { Component, OnInit } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { DataService } from '../Services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
})
export class AjouterCollegueComponent implements OnInit {

  collegue: Collegue = new Collegue();

  errorInsertion: boolean = false;

  constructor(private _dataSvc: DataService) {

  }

  ngOnInit() {
  }

  creer() {
    this._dataSvc.ajouterCollegue(this.collegue).subscribe(
      collegueAAjouter => {
        this._dataSvc.ajouterCollegue(collegueAAjouter)
        console.log(collegueAAjouter.matricule);
      }, (error: HttpErrorResponse) => {
        this.errorInsertion = true;
      });
      this.collegue = new Collegue();
  }

}
