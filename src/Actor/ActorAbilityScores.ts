import {AbilityScore, createAbilityScore} from "~/AbilityScore/AbilityScore";
import {AbilityType} from "~/enums";
import {DEFAULT_ABILITY_SCORE} from "~/constants";

export interface ActorAbilityScores {
    str: AbilityScore;
    dex: AbilityScore;
    con: AbilityScore;
    int: AbilityScore;
    wis: AbilityScore;
    cha: AbilityScore;
}

export function createActorAbilityScores(data: ActorAbilityScores = {
    str: createAbilityScore({base: DEFAULT_ABILITY_SCORE, type: AbilityType.STR}),
    dex: createAbilityScore({base: DEFAULT_ABILITY_SCORE, type: AbilityType.DEX}),
    con: createAbilityScore({base: DEFAULT_ABILITY_SCORE, type: AbilityType.CON}),
    int: createAbilityScore({base: DEFAULT_ABILITY_SCORE, type: AbilityType.INT}),
    wis: createAbilityScore({base: DEFAULT_ABILITY_SCORE, type: AbilityType.WIS}),
    cha: createAbilityScore({base: DEFAULT_ABILITY_SCORE, type: AbilityType.CHA})
}): ActorAbilityScores {
    return {
        ...data,
    }
}
