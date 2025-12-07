"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceFormulaPart = void 0;
var node_crypto_1 = require("node:crypto");
var DiceResult_1 = require("~/Dice/DiceResult");
var DiceFormulaPart = /** @class */ (function () {
    function DiceFormulaPart(props) {
        if (props === void 0) { props = {}; }
        var _a, _b, _c;
        this.diceFaces = 6;
        this.numberOfDice = 1;
        this.modifier = 0;
        this.diceFaces = (_a = props.diceFaces) !== null && _a !== void 0 ? _a : 6;
        this.numberOfDice = (_b = props.numberOfDice) !== null && _b !== void 0 ? _b : 1;
        this.modifier = (_c = props.modifier) !== null && _c !== void 0 ? _c : 0;
    }
    Object.defineProperty(DiceFormulaPart.prototype, "f", {
        get: function () {
            return this.diceFaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiceFormulaPart.prototype, "hasRolled", {
        get: function () {
            return this.lastResult !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiceFormulaPart.prototype, "max", {
        get: function () {
            return this.diceFaces * this.numberOfDice + this.modifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiceFormulaPart.prototype, "min", {
        get: function () {
            return this.numberOfDice + this.modifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiceFormulaPart.prototype, "n", {
        get: function () {
            return this.numberOfDice;
        },
        enumerable: false,
        configurable: true
    });
    DiceFormulaPart.parse = function (formula) {
        var matches = formula.match(/^(\d+)?d(\d+)(?:\s*([+-]\d+))?$/i);
        if (!matches)
            throw new Error("Invalid dice formula: ".concat(formula));
        // The number of dice might be missing, so we default to 1. Same with modifier, which defaults to 0.
        if (!matches[1])
            matches[1] = '1';
        if (!matches[3])
            matches[3] = '0';
        return new DiceFormulaPart({
            numberOfDice: parseInt(matches[1]),
            diceFaces: parseInt(matches[2]),
            modifier: parseInt(matches[3])
        });
    };
    Object.defineProperty(DiceFormulaPart.prototype, "roll", {
        get: function () {
            var _this = this;
            var rolls = Array(this.numberOfDice).fill(0).map(function () { return (0, node_crypto_1.randomInt)(1, _this.diceFaces); });
            this.lastResult = new DiceResult_1.DiceResult({
                rolls: rolls,
                modifier: this.modifier,
                total: rolls.reduce(function (a, b) { return a + b; }, 0) + this.modifier
            });
            return this.lastResult;
        },
        enumerable: false,
        configurable: true
    });
    DiceFormulaPart.create = function (props) {
        return new DiceFormulaPart(props);
    };
    return DiceFormulaPart;
}());
exports.DiceFormulaPart = DiceFormulaPart;
