import { Produto } from './../../../models/produtos.models/produtos.model';
import { OnInit } from '@angular/core';
export declare class ProdutosDeleteComponent implements OnInit {
    data: Produto;
    constructor(data: Produto);
    ngOnInit(): void;
}
