import { AbilityType } from "../enums";
export interface AbilityScore {
    bonus: () => number;
    format: (showPlusForZero?: boolean) => string;
    name: () => string;
    base?: number;
    type?: AbilityType;
}
type AbilityScoreProps = Omit<AbilityScore, 'bonus' | 'format' | 'name'>;
export declare function createAbilityScore(data?: AbilityScoreProps): AbilityScore;
export declare function createAbilityScoreFromNumber(value: number, type: AbilityType): AbilityScore;
export {};
//# sourceMappingURL=AbilityScore.d.ts.map