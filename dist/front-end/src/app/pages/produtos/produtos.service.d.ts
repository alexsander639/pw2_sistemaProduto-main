import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './../../models/produtos.model';
export declare class ProdutosService {
    private readonly snackBar;
    private readonly http;
    private baseApi;
    constructor(snackBar: MatSnackBar, http: HttpClient);
    showMessage(msg: string, isError?: boolean): void;
    list(): Observable<Produto[]>;
}
