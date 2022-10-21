"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaBranchsModule = void 0;
const common_1 = require("@nestjs/common");
const loja_branchs_service_1 = require("./loja-branchs.service");
const loja_branchs_controller_1 = require("./loja-branchs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const loja_branch_entity_1 = require("./entities/loja-branch.entity");
let LojaBranchsModule = class LojaBranchsModule {
};
LojaBranchsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([loja_branch_entity_1.LojaBranch])],
        controllers: [loja_branchs_controller_1.LojaBranchsController],
        providers: [loja_branchs_service_1.LojaBranchsService],
    })
], LojaBranchsModule);
exports.LojaBranchsModule = LojaBranchsModule;
//# sourceMappingURL=loja-branchs.module.js.map