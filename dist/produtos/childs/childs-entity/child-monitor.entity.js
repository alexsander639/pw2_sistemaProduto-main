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
exports.Monitor = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const produto_entity_1 = require("../../produto.entity");
let Monitor = class Monitor extends produto_entity_1.Produto {
    static _OPENAPI_METADATA_FACTORY() {
        return { polegadas: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Monitor.prototype, "polegadas", void 0);
Monitor = __decorate([
    (0, typeorm_1.ChildEntity)()
], Monitor);
exports.Monitor = Monitor;
//# sourceMappingURL=child-monitor.entity.js.map