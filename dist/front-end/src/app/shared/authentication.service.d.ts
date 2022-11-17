import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios.model';
import { StorageService } from './storage.service';
export declare class AuthenticationService {
    private readonly storageService;
    private readonly router;
    private readonly http;
    private baseApi;
    currentUser: Observable<Usuario | null>;
    private currentUserSubject;
    private propertyName;
    private tokenExpiryTime;
    constructor(storageService: StorageService, router: Router, http: HttpClient);
    isLoggedIn(): boolean;
    getCurrentUserValue(): Usuario | null;
    logout(): void;
    login(email: string, password: string): Observable<Usuario | null>;
    validadeTokenExpirationTime(): void;
    private getUserStorege;
}
