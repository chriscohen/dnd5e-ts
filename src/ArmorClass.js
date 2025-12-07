"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmorClass = void 0;
var constants_1 = require("~/constants");
var ArmorClass = /** @class */ (function () {
    function ArmorClass(props) {
        if (props === void 0) { props = {}; }
        var _a, _b;
        this.base = constants_1.DEFAULT_ARMOR_CLASS;
        this.isNaturalArmor = false;
        this.base = (_a = props.base) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_ARMOR_CLASS;
        this.isNaturalArmor = (_b = props.isNaturalArmor) !== null && _b !== void 0 ? _b : false;
    }
    ArmorClass.create = function (props) {
        return new ArmorClass(typeof (props) === 'number' ? { base: props, isNaturalArmor: (props > 10) } : props);
    };
    return ArmorClass;
}());
exports.ArmorClass = ArmorClass;
