"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityScore = void 0;
var enums_1 = require("~/enums");
var constants_1 = require("~/constants");
var AbilityScore = /** @class */ (function () {
    function AbilityScore(props) {
        if (props === void 0) { props = {}; }
        var _a, _b;
        this.base = constants_1.DEFAULT_ABILITY_SCORE;
        this.type = enums_1.AbilityType.STR;
        this.base = (_a = props.base) !== null && _a !== void 0 ? _a : 10;
        this.type = (_b = props.type) !== null && _b !== void 0 ? _b : enums_1.AbilityType.STR;
    }
    Object.defineProperty(AbilityScore.prototype, "bonus", {
        get: function () {
            return Math.floor((this.value - 10) / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbilityScore.prototype, "format", {
        get: function () {
            return this._format({ showPlusForZero: true });
        },
        enumerable: false,
        configurable: true
    });
    AbilityScore.prototype._format = function (props) {
        var sign;
        if (this.bonus == 0) {
            sign = props.showPlusForZero ? '+' : '';
        }
        else {
            sign = this.bonus > 0 ? '+' : '-';
        }
        return "".concat(this.value, " (").concat(sign).concat(Math.abs(this.bonus), ")");
    };
    Object.defineProperty(AbilityScore.prototype, "name", {
        get: function () {
            switch (this.type) {
                case enums_1.AbilityType.STR: return 'Strength';
                case enums_1.AbilityType.DEX: return 'Dexterity';
                case enums_1.AbilityType.CON: return 'Constitution';
                case enums_1.AbilityType.INT: return 'Intelligence';
                case enums_1.AbilityType.WIS: return 'Wisdom';
                case enums_1.AbilityType.CHA: return 'Charisma';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbilityScore.prototype, "value", {
        get: function () {
            return this.base;
        },
        enumerable: false,
        configurable: true
    });
    AbilityScore.create = function (props) {
        return new AbilityScore(typeof props === 'number' ? { base: props } : props);
    };
    return AbilityScore;
}());
exports.AbilityScore = AbilityScore;
