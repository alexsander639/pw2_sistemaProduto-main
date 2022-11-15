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
exports.ProdutosCreateComponent = void 0;
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const produtos_service_1 = require("../produtos.service");
let ProdutosCreateComponent = class ProdutosCreateComponent {
    constructor(router, produtosService) {
        this.router = router;
        this.produtosService = produtosService;
    }
    ngOnInit() {
    }
    create() {
        this.produtosService.showMessage('Produto cadastrado com sucesso!');
    }
    cancel() {
        this.router.navigate(['/produtos']);
    }
};
ProdutosCreateComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-produtos-create',
        templateUrl: './produtos-create.component.html',
        styleUrls: ['./produtos-create.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        produtos_service_1.ProdutosService])
], ProdutosCreateComponent);
exports.ProdutosCreateComponent = ProdutosCreateComponent;
//# sourceMappingURL=produtos-create.component.js.map