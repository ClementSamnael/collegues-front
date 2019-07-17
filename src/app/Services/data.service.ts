import { Injectable } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  matricules: any
  private collegueSelect = new Subject<Collegue>();

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



  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return null;
  }
}
