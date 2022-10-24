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
const create_produto_dto_1 = require("./dto/create-produto.dto");
const child_create_teclado_dto_1 = require("./childs/childs-dto/child-create-teclado.dto");
const child_create_ram_dto_1 = require("./childs/childs-dto/child-create-ram.dto");
const child_create_processador_dto_1 = require("./childs/childs-dto/child-create-processador.dto");
const child_create_fonteEnergia_dto_1 = require("./childs/childs-dto/child-create-fonteEnergia.dto");
const child_create_headset_dto_1 = require("./childs/childs-dto/child-create-headset.dto");
const child_create_cooler_dto_1 = require("./childs/childs-dto/child-create-cooler.dto");
const produtos_service_1 = require("./produtos.service");
const common_1 = require("@nestjs/common");
const role_guard_1 = require("../auth/guards/role.guard");
const roles_decorator_1 = require("../shared/decorators/roles.decorator");
const role_enum_1 = require("../enums/role.enum");
const swagger_1 = require("@nestjs/swagger");
const update_produto_dto_1 = require("./dto/update-produto.dto");
const is_public_decorator_1 = require("../shared/decorators/is-public.decorator");
const child_create_monitor_dto_1 = require("./childs/childs-dto/child-create-monitor.dto");
const child_create_hd_dto_1 = require("./childs/childs-dto/child-create-hd.dto");
const child_create_ssd_dto_1 = require("./childs/childs-dto/child-create-ssd.dto");
let ProdutosController = class ProdutosController {
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    createProduto(createProdutoDto) {
        return this.produtosService.create(createProdutoDto);
    }
    createMonitor(createMonitorDto) {
        return this.produtosService.create(createMonitorDto);
    }
    createHd(createHdDto) {
        return this.produtosService.create(createHdDto);
    }
    createCooler(createHdDto) {
        return this.produtosService.create(createHdDto);
    }
    createHeadset(createHdDto) {
        return this.produtosService.create(createHdDto);
    }
    createFonteEnergia(createFonteEnergiaDto) {
        return this.produtosService.create(createFonteEnergiaDto);
    }
    createProcessador(createProcessadorDto) {
        return this.produtosService.create(createProcessadorDto);
    }
    createSsd(createSsdDto) {
        return this.produtosService.create(createSsdDto);
    }
    createRam(createRamDto) {
        return this.produtosService.create(createRamDto);
    }
    createTeclado(createTecladoDto) {
        return this.produtosService.create(createTecladoDto);
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
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produto_dto_1.CreateProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createProduto", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/monitor'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_monitor_dto_1.CreateMonitorDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createMonitor", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/hd'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_hd_dto_1.CreateHdDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createHd", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/cooler'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_cooler_dto_1.CreateCoolerDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createCooler", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/headset'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_headset_dto_1.CreateHeadsetDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createHeadset", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/fonte-energia'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_fonteEnergia_dto_1.CreateFonteEnergiaDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createFonteEnergia", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/processador'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_processador_dto_1.CreateProcessadorDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createProcessador", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/ssd'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_ssd_dto_1.CreateSsdDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createSsd", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/ram'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_ram_dto_1.CreateRamDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createRam", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, common_1.Post)('criar/teclado'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_create_teclado_dto_1.CreateTecladoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "createTeclado", null);
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, is_public_decorator_1.IsPublic)(),
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
    (0, is_public_decorator_1.IsPublic)(),
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
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
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
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
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
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=produtos.controller.js.map