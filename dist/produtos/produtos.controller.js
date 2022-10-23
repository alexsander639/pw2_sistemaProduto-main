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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const openapi = require("@nestjs/swagger");
const produtos_service_1 = require("./produtos.service");
const create_produto_dto_1 = require("./dto/create-produto.dto");
const common_1 = require("@nestjs/common");
const role_guard_1 = require("../auth/guards/role.guard");
const roles_decorator_1 = require("../shared/decorators/roles.decorator");
const role_enum_1 = require("../enums/role.enum");
const swagger_1 = require("@nestjs/swagger");
const update_produto_dto_1 = require("./dto/update-produto.dto");
let ProdutosController = class ProdutosController {
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    create(createProdutoDto) {
        return this.produtosService.create(createProdutoDto);
    }
    findAll(page = 1, limit = 10, search) {
        return this.produtosService.findAll({ page, limit }, search);
    }
    findOne(id) {
        return this.produtosService.findOne(id);
    }
    update(id, updateProdutoDto) {
        return this.produtosService.update(id, updateProdutoDto);
    }
    remove(id) {
        return this.produtosService.remove(id);
    }
};
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: require("./produto.entity").Produto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produto_dto_1.CreateProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "create", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Get)('buscar'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "findAll", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./produto.entity").Produto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "findOne", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 200, type: require("./produto.entity").Produto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_produto_dto_1.UpdateProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "update", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "remove", null);
ProdutosController = __decorate([
    (0, swagger_1.ApiTags)('produtos'),
    (0, common_1.Controller)('produtos'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=produtos.controller.js.map