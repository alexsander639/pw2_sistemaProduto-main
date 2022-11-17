import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { LoginData, Usuario } from '../models/usuarios.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseApi: string = '/auth';
  public currentUser: Observable<Usuario | null>;
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  private propertyName: string = 'currentUser';
  private tokenExpiryTime: number = 3600;

  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router,
    private readonly http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(
      this.getUserStorege(false)
    );
    this.currentUser = this.currentUserSubject.asObservable();
   }

  isLoggedIn(): boolean {
    const user = this.getUserStorege(false);
    return !!(user && user.access_token !== null);
  }

  getCurrentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }

  logout(): void {
    this.storageService.remove(this.propertyName);
    this.currentUserSubject.next(null);
  }

  login(email: string, password: string): Observable<Usuario | null> {
    return this.http.post<LoginData>(environment.baseUrl + this.baseApi + '/login', {
      email,
      password
    }).pipe(
      switchMap((dataAuth) => {
        if(dataAuth?.access_token){
          const headers = new HttpHeaders({
            'Authorization': `${dataAuth.token_type} ${dataAuth.access_token}`,
          })
          return this.http.get<Usuario>(
            environment.baseUrl + this.baseApi + '/usuario',
            {headers}
          ).pipe(
            map((user) => {
              user = {...user, ...dataAuth};
              this.storageService.set(
                this.propertyName,
                user,
                this.tokenExpiryTime
              );
              this.currentUserSubject.next(user);
              return user;
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }

  validadeTokenExpirationTime(): void{
    if(this.storageService.isExpired(this.propertyName)){
      this.logout();
    }
  }

  private getUserStorege(isRediret: boolean = true){
    let user: Usuario | null = null;
    try {
      user = this.storageService.get(this.propertyName);
    } catch (error) {
      this.logout();
      if(isRediret){
        this.router.navigate(['/login']);
      }
    }
    return user;
  }
}
