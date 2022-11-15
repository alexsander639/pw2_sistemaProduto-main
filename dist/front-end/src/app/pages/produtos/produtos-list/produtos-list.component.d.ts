import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class ProdutosListComponent implements OnInit {
    private readonly router;
    constructor(router: Router);
    ngOnInit(): void;
    navigateToProdutosCreate(): void;
}
