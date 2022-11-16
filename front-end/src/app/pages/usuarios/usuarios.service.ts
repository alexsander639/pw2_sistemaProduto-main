import { environment } from './../../../environments/environment.prod';
import { ResponseDataList } from './../../models/shared';
import { Observable, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './../../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseApi: string = '/users';

  constructor(private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) { }

  create(produto: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(environment.baseUrl + this.baseApi + '/criar', produto);
  }

  showMessage(msg: string, isError: boolean = false) : void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  list(): Observable<Usuario[]>{
    const params= new HttpParams().set('limit', '99');

    return this.http.get<ResponseDataList<Usuario>>(
      environment.baseUrl + this.baseApi + '/buscar',
      { params }
    ).pipe(map((res) => res.items));
  }
}
