import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
export declare class ProdutosCreateComponent implements OnInit {
    private readonly router;
    constructor(router: Router);
    ngOnInit(): void;
    create(): void;
    cancel(): void;
}
