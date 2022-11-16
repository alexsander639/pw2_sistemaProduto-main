import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../../../models/produtos.model';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class ProdutosEditComponent implements OnInit {
    private readonly router;
    private readonly produtosService;
    private readonly fb;
    private readonly route;
    id: number;
    produto: Produto;
    form: FormGroup;
    tipoProdutos: String[];
    statusDisponiveis: boolean[];
    produtos: Produto[];
    constructor(router: Router, produtosService: ProdutosService, fb: FormBuilder, route: ActivatedRoute);
    ngOnInit(): void;
    create(): void;
    cancel(): void;
}
