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
exports.LojaBranchsController = void 0;
const common_1 = require("@nestjs/common");
const loja_branchs_service_1 = require("./loja-branchs.service");
const create_loja_branch_dto_1 = require("./dto/create-loja-branch.dto");
const update_loja_branch_dto_1 = require("./dto/update-loja-branch.dto");
let LojaBranchsController = class LojaBranchsController {
    constructor(lojaBranchsService) {
        this.lojaBranchsService = lojaBranchsService;
    }
    create(createLojaBranchDto) {
        return this.lojaBranchsService.create(createLojaBranchDto);
    }
    findAll(page = 1, limit = 10, search) {
        return this.lojaBranchsService.findAll({ page, limit }, search);
    }
    findOne(id) {
        return this.lojaBranchsService.findOne(id);
    }
    update(id, updateLojaBranchDto) {
        return this.lojaBranchsService.update(id, updateLojaBranchDto);
    }
    remove(id) {
        return this.lojaBranchsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_loja_branch_dto_1.CreateLojaBranchDto]),
    __metadata("design:returntype", void 0)
], LojaBranchsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], LojaBranchsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LojaBranchsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_loja_branch_dto_1.UpdateLojaBranchDto]),
    __metadata("design:returntype", void 0)
], LojaBranchsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LojaBranchsController.prototype, "remove", null);
LojaBranchsController = __decorate([
    (0, common_1.Controller)('loja-branchs'),
    __metadata("design:paramtypes", [loja_branchs_service_1.LojaBranchsService])
], LojaBranchsController);
exports.LojaBranchsController = LojaBranchsController;
//# sourceMappingURL=loja-branchs.controller.js.map