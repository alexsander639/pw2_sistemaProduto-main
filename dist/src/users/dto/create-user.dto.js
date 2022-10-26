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
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, description: "O email \u00E9 utilizado para a autentica\u00E7\u00E3o do usu\u00E1rio", example: "exemplo@exemplo.com" }, role: { required: true, type: () => String, description: "O tipo de usu\u00E1rio \u00E9 utilizado para liberar acessos restritos" }, name: { required: true, type: () => String, description: "O nome \u00E9 utilizado para identifica\u00E7\u00E3o do usu\u00E1rio" }, password: { required: true, type: () => String, description: "A senha \u00E9 utilizada para a autentica\u00E7\u00E3o e seguran\u00E7a do usu\u00E1rio\rDeve conter no m\u00EDnimo 6 caracteres", example: "Abc@123" } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe um endereço de email',
    }),
    (0, class_validator_1.IsEmail)({}, {
        message: 'Informe um endereço de email válido',
    }),
    (0, class_validator_1.MaxLength)(200, {
        message: 'O endereço de email deve ter menos de 200 caracteres',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe o tipo de usuário',
    }),
    (0, class_validator_1.MaxLength)(2, {
        message: 'O endereço de email deve ter 2 caracteres',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe o nome do usuário',
    }),
    (0, class_validator_1.MaxLength)(200, {
        message: 'O nome deve ter menos de 200 caracteres',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe uma senha',
    }),
    (0, class_validator_1.MinLength)(6, {
        message: 'A senha deve ter no mínimo 6 caracteres',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Senha muito fácil',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map