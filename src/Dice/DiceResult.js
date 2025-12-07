"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceResult = void 0;
var DiceResult = /** @class */ (function () {
    function DiceResult(props) {
        if (props === void 0) { props = {}; }
        var _a, _b, _c;
        this.total = 0;
        this.rolls = [];
        this.modifier = 0;
        this.total = (_a = props.total) !== null && _a !== void 0 ? _a : 0;
        this.rolls = (_b = props.rolls) !== null && _b !== void 0 ? _b : [];
        this.modifier = (_c = props.modifier) !== null && _c !== void 0 ? _c : 0;
    }
    DiceResult.create = function (props) {
        return new DiceResult(props);
    };
    return DiceResult;
}());
exports.DiceResult = DiceResult;
