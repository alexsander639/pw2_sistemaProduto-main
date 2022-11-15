import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from 'src/app/models/produtos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.scss']
})
export class ProdutosCreateComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  tipoProdutos: String[] = [
    'Cooler', 'Fonte de Energia', 'HD', 'Headset',
    'Monitor', 'Processador', 'RAM', 'SSD', 'Teclado'
  ];

  statusDisponiveis: boolean[] = [true, false];

  produtos: Produto[] = [];

  constructor(private readonly router: Router,
    private readonly produtosService: ProdutosService,
    private readonly fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.produtosService.list().subscribe((res) => this.produtos = res);

    this.form = this.fb.group({
      name:[null, [Validators.required]],
      marca: [null, [Validators.required]],
      status: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      descricao: [],
    });
  }

  create():void {
    this.form.markAllAsTouched();

    if(this.form.valid){
      const produto: Produto = this.form.value;

      console.log(produto);

      this.produtosService.create(produto)
      .pipe(catchError(error => {
        this.produtosService.showMessage('Produto não pode ser cadastrado!', true);
        return error;
      }))
      .subscribe(resp => {
        this.produtosService.showMessage('Produto cadastrado com sucesso!');
        this.router.navigate(['/produtos']);
      });
    }else{
      this.produtosService.showMessage('Preencha os campos obrigatórios!', true);
    }
  }

  cancel():void {
    this.router.navigate(['/produtos']);
  }

}
