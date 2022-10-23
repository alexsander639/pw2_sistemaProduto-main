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
exports.ProdutosService = void 0;
const produto_entity_1 = require("./produto.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const record_not_found_exception_1 = require("../exceptions/record-not-found.exception");
let ProdutosService = class ProdutosService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createProdutoDto) {
        const produto = new produto_entity_1.Produto();
        produto.name = createProdutoDto.name;
        produto.marca = createProdutoDto.marca;
        produto.valor = createProdutoDto.valor;
        produto.descricao = createProdutoDto.descricao;
        produto.status = true;
        return this.repository.save(produto);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.name = ILike(`%${search}%`);
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, { where });
    }
    async findOne(id) {
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return user;
    }
    async update(id, updateProdutoDto) {
        await this.repository.update(id, updateProdutoDto);
        const produto = await this.repository.findOneBy({ id });
        if (!produto) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return produto;
    }
    async remove(id) {
        const user = await this.repository.delete(id);
        if (!(user === null || user === void 0 ? void 0 : user.affected)) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return user;
    }
};
ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutosService);
exports.ProdutosService = ProdutosService;
function ILike(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=produtos.service.js.map