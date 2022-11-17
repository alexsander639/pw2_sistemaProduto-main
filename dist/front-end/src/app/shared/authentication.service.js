"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const environment_prod_1 = require("./../../environments/environment.prod");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const storage_service_1 = require("./storage.service");
let AuthenticationService = class AuthenticationService {
    constructor(storageService, router, http) {
        this.storageService = storageService;
        this.router = router;
        this.http = http;
        this.baseApi = '/auth';
        this.propertyName = 'currentUser';
        this.tokenExpiryTime = 3600;
        this.currentUserSubject = new rxjs_1.BehaviorSubject(this.getUserStorege(false));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    isLoggedIn() {
        const user = this.getUserStorege(false);
        return !!(user && user.access_token !== null);
    }
    getCurrentUserValue() {
        return this.currentUserSubject.value;
    }
    logout() {
        this.storageService.remove(this.propertyName);
        this.currentUserSubject.next(null);
    }
    login(email, password) {
        return this.http.post(environment_prod_1.environment.baseUrl + this.baseApi + '/login', {
            email,
            password
        }).pipe((0, rxjs_1.switchMap)((dataAuth) => {
            if (dataAuth === null || dataAuth === void 0 ? void 0 : dataAuth.access_token) {
                const headers = new http_1.HttpHeaders({
                    'Authorization': `${dataAuth.token_type} ${dataAuth.access_token}`,
                });
                return this.http.get(environment_prod_1.environment.baseUrl + this.baseApi + '/usuario', { headers }).pipe((0, rxjs_1.map)((user) => {
                    user = Object.assign(Object.assign({}, user), dataAuth);
                    this.storageService.set(this.propertyName, user, this.tokenExpiryTime);
                    this.currentUserSubject.next(user);
                    return user;
                }));
            }
            else {
                return (0, rxjs_1.of)(null);
            }
        }));
    }
    validadeTokenExpirationTime() {
        if (this.storageService.isExpired(this.propertyName)) {
            this.logout();
        }
    }
    getUserStorege(isRediret = true) {
        let user = null;
        try {
            user = this.storageService.get(this.propertyName);
        }
        catch (error) {
            this.logout();
            if (isRediret) {
                this.router.navigate(['/login']);
            }
        }
        return user;
    }
};
AuthenticationService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [storage_service_1.StorageService,
        router_1.Router,
        http_1.HttpClient])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map