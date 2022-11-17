import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { Produto } from '../../../models/produtos.models/produtos.model';
import { ProdutosService } from '../produtos.service';
export declare class ProdutosListComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly router;
    private readonly produtosService;
    private readonly fb;
    private readonly dialog;
    paginator: MatPaginator;
    isLoadingResults: boolean;
    data: Produto[];
    resultsLength: number;
    subscriptions: Subscription[];
    displayedColumns: string[];
    form: FormGroup;
    refresh: Subject<boolean>;
    constructor(router: Router, produtosService: ProdutosService, fb: FormBuilder, dialog: MatDialog);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    navigateToProdutosCreate(): void;
    openDeleteDialog(produto: Produto): void;
}
