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
exports.CreateTecladoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_produto_dto_1 = require("../../dto/create-produto.dto");
class CreateTecladoDto extends create_produto_dto_1.CreateProdutoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { rbg: { required: true, type: () => Boolean, description: "Informa\u00E7\u00E3os sobre se h\u00E1 a presen\u00E7a de RGB no teclado", example: true }, mecanico: { required: true, type: () => Boolean, description: "Informa\u00E7\u00E3os sobre se o teclado \u00E9 mec\u00E2nico ou n\u00E3o", example: false } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe se contém RBG ou não',
    }),
    __metadata("design:type", Boolean)
], CreateTecladoDto.prototype, "rbg", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe se é Mecânico ou não',
    }),
    __metadata("design:type", Boolean)
], CreateTecladoDto.prototype, "mecanico", void 0);
exports.CreateTecladoDto = CreateTecladoDto;
//# sourceMappingURL=child-create-teclado.dto.js.map