import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
export declare class ProdutosCreateComponent implements OnInit {
    private readonly router;
    private readonly produtosService;
    constructor(router: Router, produtosService: ProdutosService);
    ngOnInit(): void;
    create(): void;
    cancel(): void;
}
