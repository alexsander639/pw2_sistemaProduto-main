import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../../../models/produtos.model';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class ProdutosCreateComponent implements OnInit {
    private readonly router;
    private readonly produtosService;
    private readonly fb;
    form: FormGroup;
    tipoProdutos: String[];
    statusDisponiveis: boolean[];
    produtos: Produto[];
    constructor(router: Router, produtosService: ProdutosService, fb: FormBuilder);
    ngOnInit(): void;
    create(): void;
    cancel(): void;
}
