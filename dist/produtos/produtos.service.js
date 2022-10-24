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
const child_create_teclado_dto_1 = require("./childs/childs-dto/child-create-teclado.dto");
const child_teclado_entity_1 = require("./childs/childs-entity/child-teclado.entity");
const child_create_ram_dto_1 = require("./childs/childs-dto/child-create-ram.dto");
const child_ssd_entity_1 = require("./childs/childs-entity/child-ssd.entity");
const child_create_processador_dto_1 = require("./childs/childs-dto/child-create-processador.dto");
const child_create_fonteEnergia_dto_1 = require("./childs/childs-dto/child-create-fonteEnergia.dto");
const child_fonteEnergia_entity_1 = require("./childs/childs-entity/child-fonteEnergia.entity");
const child_create_cooler_dto_1 = require("./childs/childs-dto/child-create-cooler.dto");
const child_headset_entity_1 = require("./childs/childs-entity/child-headset.entity");
const child_monitor_entity_1 = require("./childs/childs-entity/child-monitor.entity");
const produto_entity_1 = require("./produto.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const record_not_found_exception_1 = require("../exceptions/record-not-found.exception");
const child_create_monitor_dto_1 = require("./childs/childs-dto/child-create-monitor.dto");
const child_create_hd_dto_1 = require("./childs/childs-dto/child-create-hd.dto");
const child_hd_entity_1 = require("./childs/childs-entity/child-hd.entity");
const child_create_headset_dto_1 = require("./childs/childs-dto/child-create-headset.dto");
const child_cooler_entity_1 = require("./childs/childs-entity/child-cooler.entity");
const child_processador_entity_1 = require("./childs/childs-entity/child-processador.entity");
const child_create_ssd_dto_1 = require("./childs/childs-dto/child-create-ssd.dto");
const child_ram_entity_1 = require("./childs/childs-entity/child-ram.entity");
let ProdutosService = class ProdutosService {
    constructor(repository, repositoryMonitor, repositoryHd, repositoryCooler, repositoryHeadset, repositoryFonteEnergia, repositoryProcessador, repositorySsd, repositoryRam, repositoryTeclado) {
        this.repository = repository;
        this.repositoryMonitor = repositoryMonitor;
        this.repositoryHd = repositoryHd;
        this.repositoryCooler = repositoryCooler;
        this.repositoryHeadset = repositoryHeadset;
        this.repositoryFonteEnergia = repositoryFonteEnergia;
        this.repositoryProcessador = repositoryProcessador;
        this.repositorySsd = repositorySsd;
        this.repositoryRam = repositoryRam;
        this.repositoryTeclado = repositoryTeclado;
    }
    create(createProdutoDto) {
        let service;
        if (createProdutoDto instanceof child_create_monitor_dto_1.CreateMonitorDto) {
            service = this.repositoryMonitor;
        }
        else if (createProdutoDto instanceof child_create_hd_dto_1.CreateHdDto) {
            service = this.repositoryHd;
        }
        else if (createProdutoDto instanceof child_create_cooler_dto_1.CreateCoolerDto) {
            service = this.repositoryCooler;
        }
        else if (createProdutoDto instanceof child_create_headset_dto_1.CreateHeadsetDto) {
            service = this.repositoryHeadset;
        }
        else if (createProdutoDto instanceof child_create_fonteEnergia_dto_1.CreateFonteEnergiaDto) {
            service = this.repositoryFonteEnergia;
        }
        else if (createProdutoDto instanceof child_create_processador_dto_1.CreateProcessadorDto) {
            service = this.repositoryProcessador;
        }
        else if (createProdutoDto instanceof child_create_ssd_dto_1.CreateSsdDto) {
            service = this.repositorySsd;
        }
        else if (createProdutoDto instanceof child_create_ram_dto_1.CreateRamDto) {
            service = this.repositoryRam;
        }
        else if (createProdutoDto instanceof child_create_teclado_dto_1.CreateTecladoDto) {
            service = this.repositoryTeclado;
        }
        else {
            service = this.repository;
        }
        const produto = service.create(createProdutoDto);
        return service.save(produto);
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
    __param(1, (0, typeorm_1.InjectRepository)(child_monitor_entity_1.Monitor)),
    __param(2, (0, typeorm_1.InjectRepository)(child_hd_entity_1.Hd)),
    __param(3, (0, typeorm_1.InjectRepository)(child_cooler_entity_1.Cooler)),
    __param(4, (0, typeorm_1.InjectRepository)(child_headset_entity_1.Headset)),
    __param(5, (0, typeorm_1.InjectRepository)(child_fonteEnergia_entity_1.FonteEnergia)),
    __param(6, (0, typeorm_1.InjectRepository)(child_processador_entity_1.Processador)),
    __param(7, (0, typeorm_1.InjectRepository)(child_ssd_entity_1.Ssd)),
    __param(8, (0, typeorm_1.InjectRepository)(child_ram_entity_1.Ram)),
    __param(9, (0, typeorm_1.InjectRepository)(child_teclado_entity_1.Teclado)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProdutosService);
exports.ProdutosService = ProdutosService;
function ILike(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=produtos.service.js.map