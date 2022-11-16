import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../../models/usuarios.model';
export declare class UsuariosService {
    private readonly snackBar;
    private readonly http;
    private baseApi;
    constructor(snackBar: MatSnackBar, http: HttpClient);
    create(produto: Usuario): Observable<Usuario>;
    showMessage(msg: string, isError?: boolean): void;
    list(): Observable<Usuario[]>;
}
