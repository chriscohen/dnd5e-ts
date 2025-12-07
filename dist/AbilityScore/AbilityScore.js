"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAbilityScore = createAbilityScore;
const enums_1 = require("~/enums");
const constants_1 = require("~/constants");
function createAbilityScore(data = {}) {
    const value = constants_1.DEFAULT_ABILITY_SCORE;
    const bonus = () => {
        return Math.floor((value - 10) / 2);
    };
    const format = (showPlusForZero = true) => {
        let sign;
        const b = bonus();
        if (b == 0) {
            sign = showPlusForZero ? '+' : '';
        }
        else {
            sign = b > 0 ? '+' : '-';
        }
        return `${value} (${sign}${Math.abs(b)})`;
    };
    const name = () => {
        switch (data.type) {
            default:
            case enums_1.AbilityType.STR: return 'Strength';
            case enums_1.AbilityType.DEX: return 'Dexterity';
            case enums_1.AbilityType.CON: return 'Constitution';
            case enums_1.AbilityType.INT: return 'Intelligence';
            case enums_1.AbilityType.WIS: return 'Wisdom';
            case enums_1.AbilityType.CHA: return 'Charisma';
        }
    };
    return {
        ...data,
        bonus,
        format,
        name
    };
}
