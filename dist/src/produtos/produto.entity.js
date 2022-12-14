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
exports.Produto = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Produto = class Produto extends typeorm_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, marca: { required: true, type: () => String }, status: { required: true, type: () => Boolean }, valor: { required: true, type: () => Number }, descricao: { required: true, type: () => String }, tipoProduto: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Produto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 200 }),
    __metadata("design:type", String)
], Produto.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 200 }),
    __metadata("design:type", String)
], Produto.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Produto.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "double" }),
    __metadata("design:type", Number)
], Produto.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 1000 }),
    __metadata("design:type", String)
], Produto.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 1000 }),
    __metadata("design:type", String)
], Produto.prototype, "tipoProduto", void 0);
Produto = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.TableInheritance)({ column: { type: "varchar", name: "tipo" } })
], Produto);
exports.Produto = Produto;
//# sourceMappingURL=produto.entity.js.map