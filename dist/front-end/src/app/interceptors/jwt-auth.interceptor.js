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
exports.JwtAuthInterceptor = void 0;
const core_1 = require("@angular/core");
const authentication_service_1 = require("../shared/authentication.service");
const messages_service_1 = require("../shared/messages.service");
let JwtAuthInterceptor = class JwtAuthInterceptor {
    constructor(authenticationService, messagesService) {
        this.authenticationService = authenticationService;
        this.messagesService = messagesService;
    }
    intercept(request, next) {
        const user = this.authenticationService.getCurrentUserValue();
        if (!user || !user.access_token || user.access_token.length == 0) {
            this.messagesService.error('Token de acesso expirado. Faça o login novamente.');
            return next.handle(request);
        }
        else {
            const modified = request.clone({
                setHeaders: {
                    Authorization: `${user.token_type} ${user.access_token}`,
                },
            });
            return next.handle(modified);
        }
    }
};
JwtAuthInterceptor = __decorate([
    (0, core_1.Injectable)(),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        messages_service_1.MessagesService])
], JwtAuthInterceptor);
exports.JwtAuthInterceptor = JwtAuthInterceptor;
//# sourceMappingURL=jwt-auth.interceptor.js.map