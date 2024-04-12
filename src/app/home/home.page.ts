import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itens = [
    {
      nome: 'Camiseta Vintage',
      descricao: 'Camiseta vintage em ótimo estado',
      preco: 20,
      imagem: 'assets/camiseta_vintage.jpg'
    },
    {
      nome: 'Bolsa de Couro',
      descricao: 'Bolsa de couro legítimo, estilo retrô',
      preco: 50,
      imagem: 'assets/bolsa_couero.jpg'
    },
    // Adicione mais itens conforme necessário
  ];

  constructor() {}
}
