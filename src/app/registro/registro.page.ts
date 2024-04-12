import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor() {}

  register() {
    // Lógica de registro aqui
  }
}
