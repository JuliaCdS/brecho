import { Component, OnInit } from '@angular/core';
import { PecaService } from '../services/peca.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pecas: any[] = [];

  constructor(private pecaService: PecaService) {}

  ngOnInit() {
    this.loadPecas();
  }

  loadPecas() {
    this.pecaService.getAllPecas().subscribe(
      (data) => {
        this.pecas = data;
      },
      (error) => {
        console.error('Erro ao carregar as peças:', error);
      }
    );
  }
}
