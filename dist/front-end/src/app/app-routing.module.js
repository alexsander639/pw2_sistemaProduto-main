"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const authentication_guard_1 = require("./guards/authentication.guard");
const login_component_1 = require("./pages/login/login.component");
const produtos_edit_component_1 = require("./pages/produtos/produtos-edit/produtos-edit.component");
const usuarios_create_component_1 = require("./pages/usuarios/usuarios-create/usuarios-create/usuarios-create.component");
const produtos_create_component_1 = require("./pages/produtos/produtos-create/produtos-create.component");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_component_1 = require("./pages/home/home.component");
const produtos_list_component_1 = require("./pages/produtos/produtos-list/produtos-list.component");
const page_component_1 = require("./layout/page/page.component");
const routes = [
    { path: 'users', children: [
            { path: 'criar', component: usuarios_create_component_1.UsuariosCreateComponent },
        ] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', component: page_component_1.PageComponent,
        canActivate: [authentication_guard_1.AuthenticationGuard],
        canActivateChild: [authentication_guard_1.AuthenticationGuard],
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'produtos', children: [
                    { path: '', component: produtos_list_component_1.ProdutosListComponent },
                    { path: 'criar', component: produtos_create_component_1.ProdutosCreateComponent },
                    { path: ':id/edit', component: produtos_edit_component_1.ProdutosEditComponent }
                ] },
            { path: 'users', children: [
                    { path: '', component: produtos_list_component_1.ProdutosListComponent },
                ] }
        ], }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map