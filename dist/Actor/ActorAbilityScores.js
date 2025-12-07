"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorAbilityScores = createActorAbilityScores;
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
