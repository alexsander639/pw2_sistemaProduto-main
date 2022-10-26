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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const record_not_found_exception_1 = require("../exceptions/record-not-found.exception");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let UsersService = class UsersService {
    constructor(repository) {
        this.repository = repository;
    }
    static findByEmail(email, arg1) {
        throw new Error('Method not implemented.');
    }
    async create(createUserDto) {
        const user = this.repository.create(createUserDto);
        const _a = await this.repository.save(user), { password } = _a, result = __rest(_a, ["password"]);
        return result;
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
    async findByEmail(email, includePassowrd = false) {
        const user = await this.repository
            .createQueryBuilder('user')
            .addSelect('user.password')
            .where('user.email = :email', { email })
            .getOne();
        if (includePassowrd) {
            return user;
        }
        else {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
    }
    async update(id, updateUserDto) {
        await this.repository.update(id, updateUserDto);
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return user;
    }
    async remove(id) {
        const user = await this.repository.delete(id);
        if (!(user === null || user === void 0 ? void 0 : user.affected)) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return true;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
function ILike(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=users.service.js.map