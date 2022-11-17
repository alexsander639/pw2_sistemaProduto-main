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
exports.UsuariosCreateComponent = void 0;
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const usuarios_service_1 = require("../../usuarios.service");
let UsuariosCreateComponent = class UsuariosCreateComponent {
    constructor(router, usuariosService, fb) {
        this.router = router;
        this.usuariosService = usuariosService;
        this.fb = fb;
        this.form = new forms_1.FormGroup({});
        this.roleDisponivel = ['pf', 'pj'];
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: [null, [forms_1.Validators.required]],
            name: [null, [forms_1.Validators.required]],
            role: [null, [forms_1.Validators.required]],
            password: [null, [forms_1.Validators.required]],
        });
    }
    create() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const usuario = this.form.value;
            console.log(usuario);
            this.usuariosService.create(usuario)
                .pipe((0, rxjs_1.catchError)(error => {
                this.usuariosService.showMessage('Usuário não pode ser cadastrado!', true);
                return error;
            }))
                .subscribe(resp => {
                this.usuariosService.showMessage('Usuário cadastrado com sucesso!');
                this.router.navigate(['/login']);
            });
        }
        else {
            this.usuariosService.showMessage('Preencha os campos obrigatórios!', true);
        }
    }
    cancel() {
        this.router.navigate(['/login']);
    }
};
UsuariosCreateComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-usuarios-create',
        templateUrl: './usuarios-create.component.html',
        styleUrls: ['./usuarios-create.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        usuarios_service_1.UsuariosService,
        forms_1.FormBuilder])
], UsuariosCreateComponent);
exports.UsuariosCreateComponent = UsuariosCreateComponent;
//# sourceMappingURL=usuarios-create.component.js.map