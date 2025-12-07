"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alignment = void 0;
var enums_1 = require("~/enums");
var Alignment = /** @class */ (function () {
    function Alignment(props) {
        var _a, _b;
        this.lawChaos = (_a = props.lawChaos) !== null && _a !== void 0 ? _a : enums_1.AlignmentLawChaos.NEUTRAL;
        this.goodEvil = (_b = props.goodEvil) !== null && _b !== void 0 ? _b : enums_1.AlignmentGoodEvil.NEUTRAL;
    }
    return Alignment;
}());
exports.Alignment = Alignment;
