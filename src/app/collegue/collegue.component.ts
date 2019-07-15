import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../model/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() public col: Collegue;

  constructor() { }

  ngOnInit() {
  }

  modifier(){
    console.log('Modification du collègue');
  }

  ajouterCollegue(){
    console.log('Ajouter un collègue');
  }


}
