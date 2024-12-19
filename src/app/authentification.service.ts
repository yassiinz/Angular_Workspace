import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user'; // Assurez-vous d'importer le modèle User

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  signin(data: any): Observable<User> {
    return this.http.post<User>('http://localhost:3000/signin', data);
  }

  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
  }
}