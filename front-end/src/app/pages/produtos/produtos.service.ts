import { ResponseDataList } from './../../models/shared';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './../../models/produtos.model';
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseApi: string = '/produtos';

  constructor(private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
    ) { }

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(environment.baseUrl + this.baseApi + '/criar', produto);
  }

  showMessage(msg: string, isError: boolean = false) : void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  list(): Observable<Produto[]>{
    const params= new HttpParams().set('limit', '99');

    return this.http.get<ResponseDataList<Produto>>(
      environment.baseUrl + this.baseApi + '/buscar',
      { params }
    ).pipe(map((res) => res.items));
  }
}
