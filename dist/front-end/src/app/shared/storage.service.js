"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const core_1 = require("@angular/core");
const dayjs_1 = require("dayjs");
const secure_ls_1 = require("secure-ls");
let StorageService = class StorageService {
    constructor() {
        this.ls = new secure_ls_1.default({ encodingType: 'aes' });
        this.prefix = 'loja_';
    }
    clear() {
        this.ls.removeAll();
    }
    remove(key) {
        this.ls.remove(this.prefix + key);
    }
    set(key, value, seconds) {
        const obj = {
            value,
            expires: seconds ? (0, dayjs_1.default)().add(seconds, 'second') : null,
        };
        this.ls.set(this.prefix + key, obj);
    }
    get(key) {
        const obj = this.ls.get(this.prefix + key);
        if (!obj.expires) {
            return obj.value;
        }
        return (0, dayjs_1.default)().isBefore(new Date(obj.expires)) ? obj.value : null;
    }
    isExpired(key) {
        const obj = this.ls.get(this.prefix + key);
        if (!obj.expires) {
            return false;
        }
        return !(0, dayjs_1.default)().isBefore(new Date(obj.expires));
    }
};
StorageService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map