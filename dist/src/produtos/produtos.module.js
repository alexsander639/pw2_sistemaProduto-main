"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosModule = void 0;
const child_teclado_entity_1 = require("./childs/childs-entity/child-teclado.entity");
const child_ram_entity_1 = require("./childs/childs-entity/child-ram.entity");
const child_headset_entity_1 = require("./childs/childs-entity/child-headset.entity");
const child_cooler_entity_1 = require("./childs/childs-entity/child-cooler.entity");
const child_monitor_entity_1 = require("./childs/childs-entity/child-monitor.entity");
const produtos_controller_1 = require("./produtos.controller");
const produtos_service_1 = require("./produtos.service");
const produto_entity_1 = require("./produto.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const child_hd_entity_1 = require("./childs/childs-entity/child-hd.entity");
const child_fonteEnergia_entity_1 = require("./childs/childs-entity/child-fonteEnergia.entity");
const child_processador_entity_1 = require("./childs/childs-entity/child-processador.entity");
const child_ssd_entity_1 = require("./childs/childs-entity/child-ssd.entity");
let ProdutosModule = class ProdutosModule {
};
ProdutosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([produto_entity_1.Produto, child_monitor_entity_1.Monitor, child_hd_entity_1.Hd, child_cooler_entity_1.Cooler, child_headset_entity_1.Headset, child_fonteEnergia_entity_1.FonteEnergia, child_processador_entity_1.Processador, child_ssd_entity_1.Ssd, child_ram_entity_1.Ram, child_teclado_entity_1.Teclado]), users_module_1.UsersModule],
        providers: [produtos_service_1.ProdutosService],
        controllers: [produtos_controller_1.ProdutosController],
    })
], ProdutosModule);
exports.ProdutosModule = ProdutosModule;
//# sourceMappingURL=produtos.module.js.map