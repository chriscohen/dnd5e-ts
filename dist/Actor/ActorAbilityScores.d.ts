import { AbilityScore } from "~/AbilityScore/AbilityScore";
export interface ActorAbilityScores {
    str: AbilityScore;
    dex: AbilityScore;
    con: AbilityScore;
    int: AbilityScore;
    wis: AbilityScore;
    cha: AbilityScore;
}
export declare function createActorAbilityScores(data?: ActorAbilityScores): ActorAbilityScores;
export declare function createActorAbilityScoresFromNumbers(str: number, dex: number, con: number, int: number, wis: number, cha: number): ActorAbilityScores;
//# sourceMappingURL=ActorAbilityScores.d.ts.map