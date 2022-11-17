import { Teclado } from './../../../models/produtos.models/teclado.model';
import { Ssd } from './../../../models/produtos.models/ssd.model';
import { Ram } from './../../../models/produtos.models/ram.model';
import { Processador } from './../../../models/produtos.models/processador.model';
import { Monitor } from './../../../models/produtos.models/monitor.model';
import { Headset } from './../../../models/produtos.models/headset.model';
import { Hd } from './../../../models/produtos.models/hd.model';
import { FonteEnergia } from './../../../models/produtos.models/fonteEnergia.model';
import { Cooler } from '../../../models/produtos.models/cooler.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../../../models/produtos.models/produtos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.scss']
})
export class ProdutosEditComponent implements OnInit {

  id!: number;
  produto!: Produto;
  form: FormGroup = new FormGroup({});

  tipoProdutos: String[] = [
    'Cooler', 'Fonte de Energia', 'HD', 'Headset',
    'Monitor', 'Processador', 'RAM', 'SSD', 'Teclado'
  ];

  tipoProdutoSelect: string = '';

  statusDisponiveis: boolean[] = [true, false];
  rotaProduto!: string;
  produtos: Produto[] = [];

  constructor(private readonly router: Router,
    private readonly produtosService: ProdutosService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.produtosService.list().subscribe((res) => this.produtos = res);

    this.form = this.fb.group({
      name:[null, [Validators.required]],
      marca: [null, [Validators.required]],
      status: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      tipoProduto: [],
      rgb: [],
      voltagem: [],
      memoria: [],
      tipo: [],
      polegadas: [],
      gigahertz: [],
      cache: [],
      capacidade: [],
      mecanico: []
    });

    this.tipoProdutoSelect = this.form.get('tipoProduto')!.value;

    this.produtosService.findById(this.id).subscribe(resp => {
      this.tests(resp);

      //console.log('PRODUTO PARA EDITAR');
      //console.log(this.produto);

      this.form.patchValue(this.produto);

      console.log('TIPO PRODUTO');
      console.log(this.tipoProdutoSelect);
    })
  }

  tests(p: Produto) : void {
    switch(p.tipoProduto){
      case 'Cooler':
        console.log(<Cooler>p);
        this.produto = (p as Cooler);
        break;
      case 'Fonte de Energia':
        const fonte: FonteEnergia = p as FonteEnergia;
        this.produto = fonte;
        break;
      case 'HD':
        const hd: Hd = p as Hd;
        this.produto = hd;
        break;
      case 'Headset':
        const headset: Headset = p as Headset;
        this.produto = headset;
        break;
      case 'Monitor':
        const monitor: Monitor = p as Monitor;
        this.produto = monitor;
        break;
      case 'Processador':
        const processador: Processador = p as Processador;
        this.produto = processador;
        break;
      case 'RAM':
        const ram: Ram = p as Ram;
        this.produto = ram;
        break;
      case 'SSD':
        const ssd: Ssd = p as Ssd;
        this.produto = ssd;
        break;
      case 'Teclado':
        const teclado: Teclado = p as Teclado;
        this.produto = teclado;
        break;
      default:
        const produto: Produto = p;
        this.produto = produto;
    }
  }

  create():void {
    this.form.markAllAsTouched();

    if(this.form.valid){
      const produto: Produto = this.identityProduto();

      console.log(produto.tipoProduto + ' rota: ' + this.rotaProduto);

      this.produtosService.update(this.id, produto)
      .pipe(catchError(error => {
        this.produtosService.showMessage('Produto não pode ser atualizado!', true);
        return error;
      }))
      .subscribe(resp => {
        this.produtosService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['/produtos']);
      });
    }else{
      this.produtosService.showMessage('Preencha os campos obrigatórios!', true);
    }
  }

  cancel():void {
    this.router.navigate(['/produtos']);
  }

  identityProduto() : Produto {
    switch(this.form.get('tipoProduto')!.value){
      case 'Cooler':
        const cooler: Cooler = this.form.value;
        this.rotaProduto = '/criar/cooler';
        return cooler;
      case 'Fonte de Energia':
        const fonte: FonteEnergia = this.form.value;
        this.rotaProduto = '/criar/fonte-energia';
        return fonte;
      case 'HD':
        const hd: Hd = this.form.value;
        this.rotaProduto = '/criar/hd';
        return hd;
      case 'Headset':
        const headset: Headset = this.form.value;
        this.rotaProduto = '/criar/headset';
        return headset;
      case 'Monitor':
        const monitor: Monitor = this.form.value;
        this.rotaProduto = '/criar/monitor';
        return monitor;
      case 'Processador':
        const processador: Processador = this.form.value;
        this.rotaProduto = '/criar/processador';
        return processador;
      case 'RAM':
        const ram: Ram = this.form.value;
        this.rotaProduto = '/criar/ram';
        return ram;
      case 'SSD':
        const ssd: Ssd = this.form.value;
        this.rotaProduto = '/criar/ssd';
        return ssd;
      case 'Teclado':
        const teclado: Teclado = this.form.value;
        this.rotaProduto = '/criar/teclado';
        return teclado;
      default:
        const produto: Produto = this.form.value;
        this.rotaProduto = '/criar';
        return produto;
    }
  }

  compareProdutos(o1: Produto, o2: Produto): boolean{
    let compara: boolean = o1?.id == o2?.id;
    if(compara){
      this.tipoProdutoSelect = o1.tipoProduto;
    }else{
      this.tipoProdutoSelect = o2.tipoProduto;
    }
    return compara;
  }
}
