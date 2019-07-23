import { Injectable } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../model/Login';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  matricules: any
  private collegueSelect = new Subject<Collegue>();
  rechercherCollegueParMatriculeparams: any;

  abonnementCollegue(): Observable<Collegue> {
    return this.collegueSelect.asObservable();
  }

  publierCollegue(unCollegue: Collegue) {
    return this.collegueSelect.next(unCollegue);
  }

  constructor(private httpClient: HttpClient) {
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${URL_BACKEND}collegues/?nomCollegue=${nom}`);
  }
 
  rechercherCollegueParMatricule(matricule: string): Observable<Collegue> {
    return this.httpClient.get<Collegue>(`${URL_BACKEND}collegues/${matricule}`);
  }

  ajouterCollegue(collegue: Collegue): Observable<Collegue> {
    return this.httpClient.post<Collegue>(`${URL_BACKEND}collegues`, collegue);
  }

  modifierCollegue(collegue: Collegue): Observable<Collegue> {
    return this.httpClient.patch<Collegue>(`${URL_BACKEND}collegues/${collegue.matricule}`, collegue);
  }

  photosGallerie():Observable<any[]>{
    return this.httpClient.get<any[]>(`${URL_BACKEND}collegues/photos`);
  }

  authentifier(login: string, motDePasse: string): Observable<Login> {
    return this.httpClient.post<Login>(`${URL_BACKEND}collegues/auth`, { json: true, body:{
        "login" : login,
        "motDePasse" : motDePasse
    } })
}


}
