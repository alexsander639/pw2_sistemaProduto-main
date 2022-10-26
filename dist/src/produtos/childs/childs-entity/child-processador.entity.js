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
exports.Processador = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const produto_entity_1 = require("../../produto.entity");
let Processador = class Processador extends produto_entity_1.Produto {
    static _OPENAPI_METADATA_FACTORY() {
        return { gigahertz: { required: true, type: () => Number }, cache: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'double' }),
    __metadata("design:type", Number)
], Processador.prototype, "gigahertz", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'double' }),
    __metadata("design:type", Number)
], Processador.prototype, "cache", void 0);
Processador = __decorate([
    (0, typeorm_1.ChildEntity)()
], Processador);
exports.Processador = Processador;
//# sourceMappingURL=child-processador.entity.js.map