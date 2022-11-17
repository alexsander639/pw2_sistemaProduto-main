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
exports.LoginComponent = void 0;
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
const messages_service_1 = require("../../shared/messages.service");
const authentication_service_1 = require("../../shared/authentication.service");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
let LoginComponent = class LoginComponent {
    constructor(fb, messagesService, authenticationService, router) {
        this.fb = fb;
        this.messagesService = messagesService;
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: [],
            password: [],
        });
    }
    submit() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const { email, password } = this.form.value;
            this.authenticationService.login(email, password)
                .pipe((0, rxjs_1.catchError)((error) => {
                this.messagesService.error(error.error.message);
                return (0, rxjs_1.throwError)(() => error);
            }))
                .subscribe((resp) => {
                if (resp) {
                    this.router.navigate(['/']);
                }
                else {
                    this.messagesService.error('E-mail ou senha inválidos!');
                }
            });
        }
        else {
            this.messagesService.error('Há campos inválidos!');
        }
    }
};
LoginComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        messages_service_1.MessagesService,
        authentication_service_1.AuthenticationService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map