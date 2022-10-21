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
exports.LojaBranch = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const typeorm_4 = require("typeorm");
const typeorm_5 = require("typeorm");
let LojaBranch = class LojaBranch extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_4.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LojaBranch.prototype, "id", void 0);
__decorate([
    (0, typeorm_2.Column)({ length: 255 }),
    __metadata("design:type", String)
], LojaBranch.prototype, "name", void 0);
__decorate([
    (0, typeorm_2.Column)('int'),
    __metadata("design:type", Number)
], LojaBranch.prototype, "code", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", Boolean)
], LojaBranch.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_3.CreateDateColumn)(),
    __metadata("design:type", Date)
], LojaBranch.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_5.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LojaBranch.prototype, "lastUpdated", void 0);
LojaBranch = __decorate([
    (0, typeorm_1.Entity)()
], LojaBranch);
exports.LojaBranch = LojaBranch;
//# sourceMappingURL=loja-branch.entity.js.map