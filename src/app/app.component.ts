import { Component } from '@angular/core';
import { unCollegue } from './mock/Collegue.mock';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html'
})
export class AppComponent {
  
  unCollegue = unCollegue;
  title = 'collegues-front';
}