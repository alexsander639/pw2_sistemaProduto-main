import { ResponseDataList } from './../../models/shared';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './../../models/produtos.models/produtos.model';
export declare class ProdutosService {
    private readonly snackBar;
    private readonly http;
    private baseApi;
    constructor(snackBar: MatSnackBar, http: HttpClient);
    create(produto: Produto, tipoProduto: string): Observable<Produto>;
    findById(id: number): Observable<Produto>;
    update(id: number, produto: Produto): Observable<Produto>;
    delete(id: number): Observable<boolean>;
    listAll(page: number, limit: number, search?: string): Observable<ResponseDataList<Produto>>;
    showMessage(msg: string, isError?: boolean): void;
    list(): Observable<Produto[]>;
}
