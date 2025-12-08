"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractType = void 0;
class AbstractType {
    static get(key) {
        throw new Error('Not implemented.');
    }
    static getAll() {
        throw new Error('Not implemented.');
    }
}
exports.AbstractType = AbstractType;
AbstractType.filename = '';
AbstractType.isLoaded = false;
