import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from './../../../models/produto.model';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.scss'],
})
export class ProdutosCreateComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private readonly router: Router,
    private readonly produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    console.log('antes: ' + this.produtos.length);

    this.produtosService.list().subscribe((resp) => (this.produtos = resp));

    console.log('depois: ' + this.produtos.length);
  }

  create(): void {
    console.log('atual: ' + this.produtos.length);
    this.produtosService.showMessage('Produto cadastrado com sucesso!');
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }
}
