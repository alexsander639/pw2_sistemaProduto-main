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
exports.ProdutosService = void 0;
const rxjs_1 = require("rxjs");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const snack_bar_1 = require("@angular/material/snack-bar");
const environment_1 = require("./../../../environments/environment");
let ProdutosService = class ProdutosService {
    constructor(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseApi = '/produtos';
    }
    create(produto, tipoProduto) {
        return this.http.post(environment_1.environment.baseUrl + this.baseApi + tipoProduto, produto);
    }
    findById(id) {
        return this.http.get(environment_1.environment.baseUrl + this.baseApi + `/${id}`);
    }
    update(id, produto) {
        return this.http.patch(environment_1.environment.baseUrl + this.baseApi + `/${id}`, produto);
    }
    delete(id) {
        return this.http.delete(environment_1.environment.baseUrl + this.baseApi + `/${id}`);
    }
    listAll(page, limit, search) {
        let params = new http_1.HttpParams().set('page', page).set('limit', limit);
        if (search === null || search === void 0 ? void 0 : search.trim()) {
            params = params.set('search', search.trim());
        }
        return this.http.get(environment_1.environment.baseUrl + this.baseApi + '/buscar', { params });
    }
    showMessage(msg, isError = false) {
        this.snackBar.open(msg, 'X', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: isError ? ['msg-error'] : ['msg-success'],
        });
    }
    list() {
        const params = new http_1.HttpParams().set('limit', '99');
        return this.http.get(environment_1.environment.baseUrl + this.baseApi + '/buscar', { params }).pipe((0, rxjs_1.map)((res) => res.items));
    }
};
ProdutosService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [snack_bar_1.MatSnackBar,
        http_1.HttpClient])
], ProdutosService);
exports.ProdutosService = ProdutosService;
//# sourceMappingURL=produtos.service.js.map