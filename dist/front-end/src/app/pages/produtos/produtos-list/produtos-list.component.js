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
exports.ProdutosListComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const dialog_1 = require("@angular/material/dialog");
const paginator_1 = require("@angular/material/paginator");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const produtos_delete_component_1 = require("../produtos-delete/produtos-delete.component");
const produtos_service_1 = require("../produtos.service");
let ProdutosListComponent = class ProdutosListComponent {
    constructor(router, produtosService, fb, dialog) {
        this.router = router;
        this.produtosService = produtosService;
        this.fb = fb;
        this.dialog = dialog;
        this.isLoadingResults = true;
        this.data = [];
        this.resultsLength = 0;
        this.subscriptions = [];
        this.displayedColumns = ['id', 'name', 'marca', 'status', 'valor', 'descricao', 'actions'];
        this.refresh = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.form = this.fb.group({
            search: [],
        });
        const sub = this.form.get('search').valueChanges
            .pipe((0, rxjs_1.distinctUntilChanged)(), (0, rxjs_1.debounceTime)(150))
            .subscribe(() => {
            this.paginator.firstPage();
            this.refresh.next(true);
        });
        this.subscriptions.push(sub);
    }
    ngAfterViewInit() {
        const sub = (0, rxjs_1.merge)(this.refresh, this.paginator.page)
            .pipe((0, rxjs_1.startWith)({}), (0, rxjs_1.switchMap)(() => {
            var _a;
            this.isLoadingResults = true;
            const search = (_a = this.form.get('search')) === null || _a === void 0 ? void 0 : _a.value;
            return this.produtosService.listAll(this.paginator.pageIndex + 1, this.paginator.pageSize, search)
                .pipe((0, rxjs_1.catchError)(() => (0, rxjs_1.of)(null)));
        }), (0, rxjs_1.map)((data) => {
            this.isLoadingResults = false;
            if (data) {
                this.resultsLength = data.meta.totalItems;
                return data.items;
            }
            return [];
        })).subscribe((data) => (this.data = data));
        this.subscriptions.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
    navigateToProdutosCreate() {
        this.router.navigate(['/produtos/criar']);
    }
    openDeleteDialog(produto) {
        const dialogRef = this.dialog.open(produtos_delete_component_1.ProdutosDeleteComponent, { data: produto });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.produtosService.delete(produto.id).subscribe(() => {
                    this.paginator.firstPage();
                    this.refresh.next(true);
                    this.produtosService.showMessage('Produto excluído com sucesso!');
                });
            }
        });
    }
};
__decorate([
    (0, core_1.ViewChild)(paginator_1.MatPaginator),
    __metadata("design:type", paginator_1.MatPaginator)
], ProdutosListComponent.prototype, "paginator", void 0);
ProdutosListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-produtos-list',
        templateUrl: './produtos-list.component.html',
        styleUrls: ['./produtos-list.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        produtos_service_1.ProdutosService,
        forms_1.FormBuilder,
        dialog_1.MatDialog])
], ProdutosListComponent);
exports.ProdutosListComponent = ProdutosListComponent;
//# sourceMappingURL=produtos-list.component.js.map