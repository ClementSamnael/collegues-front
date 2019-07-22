import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../Services/data.service';
import { Collegue } from '../model/Collegue';
import { flatMap } from 'rxjs/operators';


@Component({
  selector: 'app-collegue-selectionner',
  templateUrl: './collegue-selectionner.component.html',
})
export class CollegueSelectionnerComponent implements OnInit {

  collegue: Collegue = new Collegue();

  constructor(private route: ActivatedRoute, private _dataSvc: DataService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      flatMap(
        (params: ParamMap) => this._dataSvc.rechercherCollegueParMatricule(params.get('matricule'))
      ))
      .subscribe((collegue: Collegue) => this.collegue = collegue);
  }

}
