"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArmorClass = createArmorClass;
const constants_1 = require("../constants");
function createArmorClass(data = {}) {
    const _base = data.base ?? constants_1.DEFAULT_ARMOR_CLASS;
    const _isNaturalArmor = false;
    const _sources = [];
    function addSource(source) {
        this.sources?.push(source);
        return this;
    }
    function total() {
        let modifiers = 0;
        this.sources?.forEach(source => modifiers += source.modifier ?? 0);
        return (this.base ?? 0) + modifiers;
    }
    return {
        addSource,
        total,
        base: _base,
        isNaturalArmor: _isNaturalArmor,
        sources: _sources
    };
}
