"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var Company = /** @class */ (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "productUrl", {
        get: function () {
            var _a;
            return (_a = this._productUrl) !== null && _a !== void 0 ? _a : this.website;
        },
        enumerable: false,
        configurable: true
    });
    return Company;
}());
exports.Company = Company;
