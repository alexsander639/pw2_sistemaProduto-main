import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Produto } from './../../models/produto.model';
import { ResponseDataList } from './../../models/shared';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private baseApi: string = '/produtos';

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg.error'] : ['msg-success'],
    });
  }

  list(): Observable<Produto[]> {
    const params = new HttpParams().set('limit', '99');
    return this.http
      .get<ResponseDataList<Produto>>(
        environment.baseUrl + this.baseApi + '/buscar',
        {
          params,
        }
      )
      .pipe(map((resp) => resp.items));
  }
}
