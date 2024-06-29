import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: any[] = [];

  constructor() {}

  adicionarProduto(produto: any) {
    this.carrinho.push(produto);
  }

  removerProduto(produto: any) {
    this.carrinho = this.carrinho.filter(item => item.id !== produto.id);
  }

  limparCarrinho() {
    this.carrinho = [];
  }

  getCarrinho(): any[] {
    return this.carrinho;
  }
}
