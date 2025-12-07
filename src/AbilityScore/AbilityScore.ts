import {AbilityType} from "../enums";
import {DEFAULT_ABILITY_SCORE} from "../constants";

export interface AbilityScore {
    getBonus: () => number;
    format: (showPlusForZero?: boolean) => string;
    getName: () => string;

    base: number;
    type?: AbilityType;
}

type AbilityScoreProps = Omit<AbilityScore, 'getBonus' | 'format' | 'getName'>;

export function createAbilityScore(data: AbilityScoreProps = {base: DEFAULT_ABILITY_SCORE}): AbilityScore {
    const initialBase: number = data.base ?? DEFAULT_ABILITY_SCORE
    const initialType = data.type ?? AbilityType.STR;

    function getBonus(this: AbilityScore): number {
        return Math.floor((this?.base - 10) / 2);
    };
    function format(this: AbilityScore, showPlusForZero: boolean = true): string {
        let sign;
        const bonus = this.getBonus();

        if (bonus == 0) {
            sign = showPlusForZero ? '+' : '';
        } else {
            sign = bonus > 0 ? '+' : '-';
        }

        return `${this.base} (${sign}${Math.abs(bonus)})`;
    };
    const getName = (): string => {
        switch (data.type) {
            default:
            case AbilityType.STR: return 'Strength';
            case AbilityType.DEX: return 'Dexterity';
            case AbilityType.CON: return 'Constitution';
            case AbilityType.INT: return 'Intelligence';
            case AbilityType.WIS: return 'Wisdom';
            case AbilityType.CHA: return 'Charisma';
        }
    };

    return {
        getBonus,
        format,
        getName,

        base: initialBase,
        type: initialType
    }
}
export function createAbilityScoreFromNumber(value: number, type: AbilityType): AbilityScore {
    return createAbilityScore({base: value, type: type});
}
