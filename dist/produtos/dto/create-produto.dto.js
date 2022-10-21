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
exports.CreateProdutoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProdutoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe um nome de produto',
    }),
    (0, class_validator_1.MaxLength)(200, {
        message: 'O nome deve ter menos de 200 caracteres',
    }),
    __metadata("design:type", String)
], CreateProdutoDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe um nome de produto',
    }),
    (0, class_validator_1.MaxLength)(200, {
        message: 'A marca deve ter menos de 200 caracteres',
    }),
    __metadata("design:type", String)
], CreateProdutoDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe um valor',
    }),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(1000, {
        message: 'A descricao deve ter menos de 1000 caracteres',
    }),
    __metadata("design:type", String)
], CreateProdutoDto.prototype, "descricao", void 0);
exports.CreateProdutoDto = CreateProdutoDto;
//# sourceMappingURL=create-produto.dto.js.map