import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('http://localhost:3000/login', this.formulario.value).subscribe(
        (response: any) => {
          console.log('Login bem-sucedido', response);
          this.router.navigate(['/home/tabs']); // redirecionar para a página inicial após o login
        },
        (error: any) => {
          console.error('Erro ao fazer login', error);
        }
      );
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
}
