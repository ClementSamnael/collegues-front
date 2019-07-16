import { Component, OnInit } from '@angular/core';
import { tabMatri } from '../mock/matricules.mock';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
})
export class RechercherParNomComponent implements OnInit {

  matricules: any;

  constructor() {
  }

  ngOnInit() {
  }
  rechercherParNom(nom: string) {
    if (nom == 'LEROY') {
      this.matricules = tabMatri;
    }
  }
}
