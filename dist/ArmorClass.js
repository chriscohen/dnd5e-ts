"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmorClass = void 0;
const constants_1 = require("~/constants");
class ArmorClass {
    constructor(props = {}) {
        this.base = constants_1.DEFAULT_ARMOR_CLASS;
        this.isNaturalArmor = false;
        this.base = props.base ?? constants_1.DEFAULT_ARMOR_CLASS;
        this.isNaturalArmor = props.isNaturalArmor ?? false;
    }
    static create(props) {
        return new ArmorClass(typeof (props) === 'number' ? { base: props, isNaturalArmor: (props > 10) } : props);
    }
}
exports.ArmorClass = ArmorClass;
