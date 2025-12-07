"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAbilityScore = createAbilityScore;
exports.createAbilityScoreFromNumber = createAbilityScoreFromNumber;
const enums_1 = require("../enums");
const constants_1 = require("../constants");
function createAbilityScore(data = { base: constants_1.DEFAULT_ABILITY_SCORE }) {
    const initialBase = data.base ?? constants_1.DEFAULT_ABILITY_SCORE;
    const initialType = data.type ?? enums_1.AbilityType.STR;
    function getBonus() {
        return Math.floor((this?.base - 10) / 2);
    }
    ;
    function format(showPlusForZero = true) {
        let sign;
        const bonus = this.getBonus();
        if (bonus == 0) {
            sign = showPlusForZero ? '+' : '';
        }
        else {
            sign = bonus > 0 ? '+' : '-';
        }
        return `${this.base} (${sign}${Math.abs(bonus)})`;
    }
    ;
    const getName = () => {
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
        getBonus,
        format,
        getName,
        base: initialBase,
        type: initialType
    };
}
function createAbilityScoreFromNumber(value, type) {
    return createAbilityScore({ base: value, type: type });
}
