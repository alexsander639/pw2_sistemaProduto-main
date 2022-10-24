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
exports.CreateSsdDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_produto_dto_1 = require("../../dto/create-produto.dto");
class CreateSsdDto extends create_produto_dto_1.CreateProdutoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { memoria: { required: true, type: () => String, description: "Informa\u00E7\u00E3os sobre quantidade de mem\u00F3ria do SSD" } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe a quantidade de memória',
    }),
    (0, class_validator_1.MaxLength)(100, {
        message: 'O texto deve ter menos de 100 caracteres',
    }),
    __metadata("design:type", String)
], CreateSsdDto.prototype, "memoria", void 0);
exports.CreateSsdDto = CreateSsdDto;
//# sourceMappingURL=child-create-ssd.dto.js.map