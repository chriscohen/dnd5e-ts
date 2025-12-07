"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorAbilityScores = createActorAbilityScores;
exports.createActorAbilityScoresFromNumbers = createActorAbilityScoresFromNumbers;
const AbilityScore_1 = require("~/AbilityScore/AbilityScore");
const enums_1 = require("~/enums");
const constants_1 = require("~/constants");
function createActorAbilityScores(data = {
    str: (0, AbilityScore_1.createAbilityScore)({ base: constants_1.DEFAULT_ABILITY_SCORE, type: enums_1.AbilityType.STR }),
    dex: (0, AbilityScore_1.createAbilityScore)({ base: constants_1.DEFAULT_ABILITY_SCORE, type: enums_1.AbilityType.DEX }),
    con: (0, AbilityScore_1.createAbilityScore)({ base: constants_1.DEFAULT_ABILITY_SCORE, type: enums_1.AbilityType.CON }),
    int: (0, AbilityScore_1.createAbilityScore)({ base: constants_1.DEFAULT_ABILITY_SCORE, type: enums_1.AbilityType.INT }),
    wis: (0, AbilityScore_1.createAbilityScore)({ base: constants_1.DEFAULT_ABILITY_SCORE, type: enums_1.AbilityType.WIS }),
    cha: (0, AbilityScore_1.createAbilityScore)({ base: constants_1.DEFAULT_ABILITY_SCORE, type: enums_1.AbilityType.CHA })
}) {
    return {
        ...data,
    };
}
function createActorAbilityScoresFromNumbers(str, dex, con, int, wis, cha) {
    return createActorAbilityScores({
        str: (0, AbilityScore_1.createAbilityScore)({ base: str, type: enums_1.AbilityType.STR }),
        dex: (0, AbilityScore_1.createAbilityScore)({ base: dex, type: enums_1.AbilityType.DEX }),
        con: (0, AbilityScore_1.createAbilityScore)({ base: con, type: enums_1.AbilityType.CON }),
        int: (0, AbilityScore_1.createAbilityScore)({ base: int, type: enums_1.AbilityType.INT }),
        wis: (0, AbilityScore_1.createAbilityScore)({ base: wis, type: enums_1.AbilityType.WIS }),
        cha: (0, AbilityScore_1.createAbilityScore)({ base: cha, type: enums_1.AbilityType.CHA })
    });
}
