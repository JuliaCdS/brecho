import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PecaService } from '../services/peca.service';
import { CarrinhoService } from '../carrinho.service'; // Importe o serviço de carrinho aqui

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
})
export class ProdutoDetalhePage implements OnInit {
  peca: any;

  constructor(
    private route: ActivatedRoute,
    private pecaService: PecaService,
    private carrinhoService: CarrinhoService // Injete o serviço de carrinho aqui
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pecaService.getPecaById(id).subscribe((data: any) => {
        this.peca = data;
      });
    }
  }

  adicionarAoCarrinho() {
    if (this.peca) {
      this.carrinhoService.adicionarProduto(this.peca); // Adiciona o produto ao carrinho usando o serviço de carrinho
      console.log('Produto adicionado ao carrinho:', this.peca);
      // Poderia incluir uma mensagem de sucesso ou redirecionar para a página do carrinho aqui
    }
  }
}
