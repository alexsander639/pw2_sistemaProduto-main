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
exports.Teclado = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const produto_entity_1 = require("../../produto.entity");
let Teclado = class Teclado extends produto_entity_1.Produto {
    static _OPENAPI_METADATA_FACTORY() {
        return { rgb: { required: true, type: () => Boolean }, mecanico: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean' }),
    __metadata("design:type", Boolean)
], Teclado.prototype, "rgb", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean' }),
    __metadata("design:type", Boolean)
], Teclado.prototype, "mecanico", void 0);
Teclado = __decorate([
    (0, typeorm_1.ChildEntity)()
], Teclado);
exports.Teclado = Teclado;
//# sourceMappingURL=child-teclado.entity.js.map