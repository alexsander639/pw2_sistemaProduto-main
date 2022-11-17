"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDateInterceptor = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const lodash_1 = require("lodash");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let JsonDateInterceptor = class JsonDateInterceptor {
    constructor() {
        this._isoDateFormat = /(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
    }
    intercept(req, next) {
        const modified = req.clone({
            params: this._convertParamsRequest((0, lodash_1.cloneDeep)(req.params)),
            body: this._convertBodyRequest(req.body),
        });
        return next.handle(modified).pipe((0, operators_1.catchError)((error) => {
            const body = error.data;
            this._convertBodyResponse(body);
            return (0, rxjs_1.throwError)(() => error);
        }), (0, operators_1.map)((val) => {
            if (val instanceof http_1.HttpResponse) {
                const body = val.body;
                this._convertBodyResponse(body);
            }
            return val;
        }));
    }
    _adjustTimezone(value, origin, iteration = 0) {
        const date = new Date(value);
        let timezone = date.getTimezoneOffset() * 60 * 1000;
        timezone *= origin === 'request' ? -1 : 1;
        const adjust = new Date(date.getTime() + timezone);
        return date.getTimezoneOffset() === adjust.getTimezoneOffset() ||
            iteration > 3
            ? adjust
            : this._adjustTimezone(adjust, origin, iteration++);
    }
    _convertBodyRequest(body) {
        if (!body) {
            return body;
        }
        if (typeof body !== 'object') {
            return body;
        }
        for (const key of Object.keys(body)) {
            const value = body[key];
            if ((0, lodash_1.isDate)(value) || this._isIsoDateString(value)) {
                body[key] = this._adjustTimezone(value, 'request');
            }
            else if (typeof value === 'object') {
                this._convertBodyRequest(value);
            }
        }
        return body;
    }
    _convertBodyResponse(body) {
        if (!body) {
            return body;
        }
        if (typeof body !== 'object') {
            return body;
        }
        for (const key of Object.keys(body)) {
            const value = body[key];
            if (this._isIsoDateString(value)) {
                body[key] = this._adjustTimezone(value, 'response');
            }
            else if (typeof value === 'object') {
                this._convertBodyResponse(value);
            }
        }
    }
    _convertParamsRequest(params) {
        if (!params) {
            return params;
        }
        for (const key of params.keys()) {
            const value = params.get(key);
            if (value && this._isIsoDateString(value)) {
                params = params.set(key, this._adjustTimezone(value, 'request').toISOString());
            }
        }
        return params;
    }
    _isIsoDateString(value) {
        if (value === null || value === undefined) {
            return false;
        }
        if (typeof value === 'string') {
            return this._isoDateFormat.test(value);
        }
        return false;
    }
};
JsonDateInterceptor = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], JsonDateInterceptor);
exports.JsonDateInterceptor = JsonDateInterceptor;
//# sourceMappingURL=json-date.interceptor.js.map