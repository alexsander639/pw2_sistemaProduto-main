import { ResponseDataList } from './../../models/shared';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './../../models/produtos.models/produtos.model';
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseApi: string = '/produtos';

  constructor(private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
    ) { }

  create(produto: Produto, tipoProduto: string): Observable<Produto>{
    return this.http.post<Produto>(environment.baseUrl + this.baseApi + tipoProduto, produto);
  }

  findById(id: number): Observable<Produto>{
    return this.http.get<Produto>(environment.baseUrl + this.baseApi + `/${id}`);
  }

  update(id: number, produto: Produto): Observable<Produto>{
    return this.http.patch<Produto>(environment.baseUrl + this.baseApi + `/${id}`, produto);
  }

  delete(id: number): Observable<boolean>{
    return this.http.delete<boolean>(environment.baseUrl + this.baseApi + `/${id}`);
  }

  listAll(
    page: number,
    limit: number,
    search?: string): Observable<ResponseDataList<Produto>>{
    let params = new HttpParams().set('page', page).set('limit', limit);
    if(search?.trim()){
      params = params.set('search', search.trim());
    }
    return this.http.get<ResponseDataList<Produto>>(
      environment.baseUrl + this.baseApi + '/buscar',
      {params}
    );
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
