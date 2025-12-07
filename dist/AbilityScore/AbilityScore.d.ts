import { AbilityType } from "../enums";
export interface AbilityScore {
    getBonus: () => number;
    format: (showPlusForZero?: boolean) => string;
    getName: () => string;
    base: number;
    type?: AbilityType;
}
type AbilityScoreProps = Omit<AbilityScore, 'getBonus' | 'format' | 'getName'>;
export declare function createAbilityScore(data?: AbilityScoreProps): AbilityScore;
export declare function createAbilityScoreFromNumber(value: number, type: AbilityType): AbilityScore;
export {};
//# sourceMappingURL=AbilityScore.d.ts.map