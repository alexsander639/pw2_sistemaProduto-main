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
exports.LojaBranchsService = void 0;
const record_not_found_exception_1 = require("../exceptions/record-not-found.exception");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const loja_branch_entity_1 = require("./entities/loja-branch.entity");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let LojaBranchsService = class LojaBranchsService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createLojaBranchDto) {
        const lojaBranch = new loja_branch_entity_1.LojaBranch();
        lojaBranch.name = createLojaBranchDto.name;
        lojaBranch.code = createLojaBranchDto.code;
        lojaBranch.isActive = true;
        return this.repository.save(lojaBranch);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.name = (0, typeorm_2.ILike)(`%${search}%`);
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, { where });
    }
    async findOne(id) {
        const lojaBranch = await this.repository.findOneBy({ id });
        if (!lojaBranch) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return lojaBranch;
    }
    async update(id, updateLojaBranchDto) {
        await this.repository.update(id, updateLojaBranchDto);
        const lojaBranch = await this.repository.findOneBy({ id });
        if (!lojaBranch) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return lojaBranch;
    }
    async remove(id) {
        const lojaBranch = await this.repository.delete(id);
        if (!(lojaBranch === null || lojaBranch === void 0 ? void 0 : lojaBranch.affected)) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return true;
    }
};
LojaBranchsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loja_branch_entity_1.LojaBranch)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LojaBranchsService);
exports.LojaBranchsService = LojaBranchsService;
//# sourceMappingURL=loja-branchs.service.js.map