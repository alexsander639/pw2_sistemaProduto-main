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
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
let ProdutosCreateComponent = class ProdutosCreateComponent {
    constructor(router, produtosService, fb) {
        this.router = router;
        this.produtosService = produtosService;
        this.fb = fb;
        this.form = new forms_1.FormGroup({});
        this.tipoProdutos = [
            'Cooler', 'Fonte de Energia', 'HD', 'Headset',
            'Monitor', 'Processador', 'RAM', 'SSD', 'Teclado'
        ];
        this.statusDisponiveis = [true, false];
        this.produtos = [];
    }
    ngOnInit() {
        this.produtosService.list().subscribe((res) => this.produtos = res);
        this.form = this.fb.group({
            name: [null, [forms_1.Validators.required]],
            marca: [null, [forms_1.Validators.required]],
            status: [null, [forms_1.Validators.required]],
            valor: [null, [forms_1.Validators.required]],
            descricao: [],
            tipo: [],
        });
    }
    create() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const produto = this.form.value;
            console.log(produto);
            this.produtosService.create(produto)
                .pipe((0, rxjs_1.catchError)(error => {
                this.produtosService.showMessage('Produto não pode ser cadastrado!', true);
                return error;
            }))
                .subscribe(resp => {
                this.produtosService.showMessage('Produto cadastrado com sucesso!');
                this.router.navigate(['/produtos']);
            });
        }
        else {
            this.produtosService.showMessage('Preencha os campos obrigatórios!', true);
        }
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
        produtos_service_1.ProdutosService,
        forms_1.FormBuilder])
], ProdutosCreateComponent);
exports.ProdutosCreateComponent = ProdutosCreateComponent;
//# sourceMappingURL=produtos-create.component.js.map