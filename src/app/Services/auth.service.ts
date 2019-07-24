import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collegue } from '../model/Collegue';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  authentifier(login: string, motDePasse: string) {
    return this.httpClient.post(URL_BACKEND + 'auth', {
      "login": "amande",
      "motDePasse": "amande"
    }, { withCredentials: true });
  }

  logout() {
    return this.httpClient.post('http://localhost:8080/logout', {}, { withCredentials: true })
  }

  isLoggedIn(): Observable<Collegue> {
    return this.httpClient.get<Collegue>(URL_BACKEND + '/me', { withCredentials: true })
  }
}




