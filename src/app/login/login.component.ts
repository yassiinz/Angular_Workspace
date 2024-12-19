import { Component } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { User } from '../models/user'; // Assurez-vous d'importer le modèle User

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { // Initialiser l'objet user
    email: '',
    password: '',
    role: '',
    name: '',
    surname: '',
    accessToken: ''
  };

  constructor(private authService: AuthentificationService) { }

  login(data: any): void {
    this.authService.signin(data).subscribe(
      (response) => {
        // Stockez le jeton JWT dans le stockage local
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.role);
      }
    );
  }
}