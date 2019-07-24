import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
})
export class ConnexionComponent implements OnInit {


  login: string;
  motDePasse: string;

  nonIdentifier: boolean = false;
  erreur: string;
  err: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.nonIdentifier = false;
  }



  connexion(login: string, motDePasse: string) {
    this.authService.authentifier(login, motDePasse)
      .subscribe(() => {
        this.router.navigate(['/accueil']);
      }, (error: HttpErrorResponse) => {
        this.err = true;
        if (error.status == 401) {
          this.erreur = "Erreur dans le login et/ou le mot de passe"
        } else if (error.status == 0) {
          this.erreur = "Probleme serveur"
        }
      })
  }


  recommencer(){
    this.ngOnInit();
  }

}
