import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('http://localhost:3000/register', this.formulario.value).subscribe(
        (response: any) => {
          console.log('Usuário registrado com sucesso', response);
        },
        (error: any) => {
          console.error('Erro ao registrar o usuário', error);
        }
      );
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
}
