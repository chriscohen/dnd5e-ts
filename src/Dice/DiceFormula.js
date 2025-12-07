"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceFormula = void 0;
var DiceFormulaPart_1 = require("~/Dice/DiceFormulaPart");
var DiceFormula = /** @class */ (function () {
    function DiceFormula(props) {
        if (props === void 0) { props = {}; }
        var _a;
        this.parts = [];
        this.lastResult = [];
        if (typeof (props) === 'string') {
            this.parts = DiceFormula.parse(props);
        }
        else {
            this.parts = (_a = props.parts) !== null && _a !== void 0 ? _a : [];
        }
    }
    Object.defineProperty(DiceFormula.prototype, "hasRolled", {
        get: function () {
            return this.lastResult !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiceFormula.prototype, "max", {
        get: function () {
            var total = 0;
            this.parts.forEach(function (part) { return total += part.max; });
            return total;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiceFormula.prototype, "min", {
        get: function () {
            var total = 0;
            this.parts.forEach(function (part) { return total += part.min; });
            return total;
        },
        enumerable: false,
        configurable: true
    });
    DiceFormula.prototype.roll = function () {
        var results = [];
        this.parts.forEach(function (part) {
            part.roll;
            results.push(part.lastResult);
        });
        return results;
    };
    DiceFormula.parse = function (formula) {
        var result = [];
        formula = formula.replace(/\s/g, '');
        var individualRolls = formula.split(/[=\-]/);
        if (individualRolls === null)
            throw new Error("Invalid dice formula: ".concat(formula));
        else if (individualRolls.length === 0)
            return [];
        else {
            individualRolls.forEach(function (roll) {
                result.push(DiceFormulaPart_1.DiceFormulaPart.parse(roll));
            });
        }
        return result;
    };
    DiceFormula.create = function (props) {
        return new DiceFormula(props);
    };
    return DiceFormula;
}());
exports.DiceFormula = DiceFormula;
