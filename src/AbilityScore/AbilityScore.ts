import {AbilityType} from "../enums";
import {DEFAULT_ABILITY_SCORE} from "../constants";

export interface AbilityScore {
    bonus: () => number;
    format: (showPlusForZero?: boolean) => string;
    name: () => string;

    base?: number;
    type?: AbilityType;
}

type AbilityScoreProps = Omit<AbilityScore, 'bonus' | 'format' | 'name'>;

export function createAbilityScore(data: AbilityScoreProps = {}): AbilityScore {
    const value: number = DEFAULT_ABILITY_SCORE

    const bonus = (): number => {
        return Math.floor((value - 10) / 2);
    };
    const format = (showPlusForZero: boolean = true): string => {
        let sign;
        const b = bonus();

        if (b == 0) {
            sign = showPlusForZero ? '+' : '';
        } else {
            sign = b > 0 ? '+' : '-';
        }

        return `${value} (${sign}${Math.abs(b)})`;
    };
    const name = (): string => {
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
        ...data,
        bonus,
        format,
        name
    }
}
export function createAbilityScoreFromNumber(value: number, type: AbilityType): AbilityScore {
    return createAbilityScore({base: value, type: type});
}
