import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-pecas',
  templateUrl: './admin-pecas.page.html',
  styleUrls: ['./admin-pecas.page.scss'],
})
export class AdminPecasPage {
  nome: string = '';
  descricao: string = '';
  preco: number = 0;

  constructor(private http: HttpClient, private toastController: ToastController) {}

  async inserirPeca() {
    const data = {
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco
    };

    try {
      const url = 'http://localhost:3000/api/inserir-peca'; // URL da sua API Node.js
      const response = await this.http.post(url, data).toPromise();
      console.log('Response:', response);
      this.mostrarToast('Peça inserida com sucesso!');
      this.nome = '';
      this.descricao = '';
      this.preco = 0;
    } catch (error) {
      console.error('Erro ao inserir peça:', error);
      this.mostrarToast('Erro ao inserir peça');
    }
  }

  async mostrarToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
