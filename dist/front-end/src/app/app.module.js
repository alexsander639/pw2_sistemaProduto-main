"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const produtos_create_component_1 = require("./pages/produtos/produtos-create/produtos-create.component");
const produtos_list_component_1 = require("./pages/produtos/produtos-list/produtos-list.component");
const home_component_1 = require("./pages/home/home.component");
const core_1 = require("@angular/core");
const toolbar_1 = require("@angular/material/toolbar");
const snack_bar_1 = require("@angular/material/snack-bar");
const form_field_1 = require("@angular/material/form-field");
const select_1 = require("@angular/material/select");
const input_1 = require("@angular/material/input");
const table_1 = require("@angular/material/table");
const paginator_1 = require("@angular/material/paginator");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const red_directive_1 = require("./directives/red.directive");
const footer_component_1 = require("./layout/footer/footer.component");
const header_component_1 = require("./layout/header/header.component");
const nav_component_1 = require("./layout/nav/nav.component");
const list_1 = require("@angular/material/list");
const sidenav_1 = require("@angular/material/sidenav");
const card_1 = require("@angular/material/card");
const button_1 = require("@angular/material/button");
const usuarios_create_component_1 = require("./pages/usuarios/usuarios-create/usuarios-create/usuarios-create.component");
const produtos_edit_component_1 = require("./pages/produtos/produtos-edit/produtos-edit.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, red_directive_1.RedDirective, nav_component_1.NavComponent, home_component_1.HomeComponent, produtos_list_component_1.ProdutosListComponent, produtos_create_component_1.ProdutosCreateComponent, usuarios_create_component_1.UsuariosCreateComponent, produtos_edit_component_1.ProdutosEditComponent],
        imports: [
            progress_spinner_1.MatProgressSpinnerModule,
            paginator_1.MatPaginatorModule,
            table_1.MatTableModule,
            forms_1.ReactiveFormsModule,
            input_1.MatInputModule,
            select_1.MatSelectModule,
            form_field_1.MatFormFieldModule,
            snack_bar_1.MatSnackBarModule,
            button_1.MatButtonModule,
            card_1.MatCardModule,
            list_1.MatListModule,
            sidenav_1.MatSidenavModule,
            toolbar_1.MatToolbarModule,
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map