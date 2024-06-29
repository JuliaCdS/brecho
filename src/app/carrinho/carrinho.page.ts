import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service'; // Importe seu serviço de carrinho aqui

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage {
  carrinho: any[] = [];

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ionViewWillEnter() {
    this.carrinho = this.carrinhoService.getCarrinho(); // Obtenha os produtos do carrinho ao entrar na página
  }

  removerDoCarrinho(item: any) {
    this.carrinhoService.removerProduto(item); // Chame o serviço para remover o produto do carrinho
    this.carrinho = this.carrinhoService.getCarrinho(); // Atualize a lista de itens no carrinho após a remoção
  }

  calcularTotal(): number {
    return this.carrinho.reduce((acc, item) => acc + item.preco, 0); // Calcule o total do carrinho somando os preços
  }

  finalizarCompra() {
    // Implemente a lógica para finalizar a compra, por exemplo, redirecionar para uma página de checkout
    this.router.navigate(['/checkout']);
  }
}
