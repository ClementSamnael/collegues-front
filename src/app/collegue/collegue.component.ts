import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Collegue } from '../model/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})

export class CollegueComponent implements OnInit {

  @Input() public col: Collegue;

  @Output() texteSaisieEvt: EventEmitter<string> = new EventEmitter();

  isAvailable: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  modifier() {
    this.isAvailable = true;
    console.log(this.isAvailable);
  }

  ajouterCollegue() {
    console.log('Ajouter un collègue');
  }

  valider(saisieTexte: HTMLInputElement) {
    this.texteSaisieEvt.emit(saisieTexte.value);
    saisieTexte.value = '';
    saisieTexte.focus();
  }


}
