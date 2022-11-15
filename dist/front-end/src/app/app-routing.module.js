"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const produtos_create_component_1 = require("./pages/produtos/produtos-create/produtos-create.component");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_component_1 = require("./pages/home/home.component");
const produtos_list_component_1 = require("./pages/produtos/produtos-list/produtos-list.component");
const routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'produtos', children: [
            { path: '', component: produtos_list_component_1.ProdutosListComponent },
            { path: 'criar', component: produtos_create_component_1.ProdutosCreateComponent },
        ] }
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