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
exports.ProdutosEditComponent = void 0;
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const produtos_service_1 = require("../produtos.service");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
let ProdutosEditComponent = class ProdutosEditComponent {
    constructor(router, produtosService, fb, route) {
        this.router = router;
        this.produtosService = produtosService;
        this.fb = fb;
        this.route = route;
        this.form = new forms_1.FormGroup({});
        this.tipoProdutos = [
            'Cooler', 'Fonte de Energia', 'HD', 'Headset',
            'Monitor', 'Processador', 'RAM', 'SSD', 'Teclado'
        ];
        this.tipoProdutoSelect = '';
        this.statusDisponiveis = [true, false];
        this.produtos = [];
    }
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.produtosService.list().subscribe((res) => this.produtos = res);
        this.form = this.fb.group({
            name: [null, [forms_1.Validators.required]],
            marca: [null, [forms_1.Validators.required]],
            status: [null, [forms_1.Validators.required]],
            valor: [null, [forms_1.Validators.required]],
            descricao: [null, [forms_1.Validators.required]],
            tipoProduto: [],
            rgb: [],
            voltagem: [],
            memoria: [],
            tipo: [],
            polegadas: [],
            gigahertz: [],
            cache: [],
            capacidade: [],
            mecanico: []
        });
        this.tipoProdutoSelect = this.form.get('tipoProduto').value;
        this.produtosService.findById(this.id).subscribe(resp => {
            this.tests(resp);
            this.form.patchValue(this.produto);
            console.log('TIPO PRODUTO');
            console.log(this.tipoProdutoSelect);
        });
    }
    tests(p) {
        switch (p.tipoProduto) {
            case 'Cooler':
                console.log(p);
                this.produto = p;
                break;
            case 'Fonte de Energia':
                const fonte = p;
                this.produto = fonte;
                break;
            case 'HD':
                const hd = p;
                this.produto = hd;
                break;
            case 'Headset':
                const headset = p;
                this.produto = headset;
                break;
            case 'Monitor':
                const monitor = p;
                this.produto = monitor;
                break;
            case 'Processador':
                const processador = p;
                this.produto = processador;
                break;
            case 'RAM':
                const ram = p;
                this.produto = ram;
                break;
            case 'SSD':
                const ssd = p;
                this.produto = ssd;
                break;
            case 'Teclado':
                const teclado = p;
                this.produto = teclado;
                break;
            default:
                const produto = p;
                this.produto = produto;
        }
    }
    create() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const produto = this.identityProduto();
            console.log(produto.tipoProduto + ' rota: ' + this.rotaProduto);
            this.produtosService.update(this.id, produto)
                .pipe((0, rxjs_1.catchError)(error => {
                this.produtosService.showMessage('Produto não pode ser atualizado!', true);
                return error;
            }))
                .subscribe(resp => {
                this.produtosService.showMessage('Produto atualizado com sucesso!');
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
    identityProduto() {
        switch (this.form.get('tipoProduto').value) {
            case 'Cooler':
                const cooler = this.form.value;
                this.rotaProduto = '/criar/cooler';
                return cooler;
            case 'Fonte de Energia':
                const fonte = this.form.value;
                this.rotaProduto = '/criar/fonte-energia';
                return fonte;
            case 'HD':
                const hd = this.form.value;
                this.rotaProduto = '/criar/hd';
                return hd;
            case 'Headset':
                const headset = this.form.value;
                this.rotaProduto = '/criar/headset';
                return headset;
            case 'Monitor':
                const monitor = this.form.value;
                this.rotaProduto = '/criar/monitor';
                return monitor;
            case 'Processador':
                const processador = this.form.value;
                this.rotaProduto = '/criar/processador';
                return processador;
            case 'RAM':
                const ram = this.form.value;
                this.rotaProduto = '/criar/ram';
                return ram;
            case 'SSD':
                const ssd = this.form.value;
                this.rotaProduto = '/criar/ssd';
                return ssd;
            case 'Teclado':
                const teclado = this.form.value;
                this.rotaProduto = '/criar/teclado';
                return teclado;
            default:
                const produto = this.form.value;
                this.rotaProduto = '/criar';
                return produto;
        }
    }
    compareProdutos(o1, o2) {
        let compara = (o1 === null || o1 === void 0 ? void 0 : o1.id) == (o2 === null || o2 === void 0 ? void 0 : o2.id);
        if (compara) {
            this.tipoProdutoSelect = o1.tipoProduto;
        }
        else {
            this.tipoProdutoSelect = o2.tipoProduto;
        }
        return compara;
    }
};
ProdutosEditComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-produtos-edit',
        templateUrl: './produtos-edit.component.html',
        styleUrls: ['./produtos-edit.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        produtos_service_1.ProdutosService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute])
], ProdutosEditComponent);
exports.ProdutosEditComponent = ProdutosEditComponent;
//# sourceMappingURL=produtos-edit.component.js.map