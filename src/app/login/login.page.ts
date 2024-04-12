import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage { 
  email: string = ''; // Inicialize a propriedade 'email' no construtor
  password: string = ''; // Inicialize a propriedade 'password' no construtor

  constructor() {}

  login() {
    // Lógica de login aqui
  }
}
