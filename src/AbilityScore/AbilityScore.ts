import {AbilityType} from "~/classes/enums";
import {DEFAULT_ABILITY_SCORE} from "~/utils/utils";
import type {FormatBonusProps} from "~/classes/types";

export type AbilityScoreProps = {
    base?: number;
    type?: AbilityType;
};

export class AbilityScore {
    base: number = DEFAULT_ABILITY_SCORE;
    type: AbilityType = AbilityType.STR;

    constructor(props: AbilityScoreProps = {}) {
        this.base = props.base ?? 10;
        this.type = props.type ?? AbilityType.STR;
    }

    get bonus(): number {
        return Math.floor((this.value - 10) / 2);
    }

    get format(): string {
        return this._format({showPlusForZero: true});
    }

    _format(props: FormatBonusProps): string {
        let sign;

        if (this.bonus == 0) {
            sign = props.showPlusForZero ? '+' : '';
        } else {
            sign = this.bonus > 0 ? '+' : '-';
        }

        return `${this.value} (${sign}${Math.abs(this.bonus)})`;
    }

    get name(): string {
        switch (this.type) {
            case AbilityType.STR: return 'Strength';
            case AbilityType.DEX: return 'Dexterity';
            case AbilityType.CON: return 'Constitution';
            case AbilityType.INT: return 'Intelligence';
            case AbilityType.WIS: return 'Wisdom';
            case AbilityType.CHA: return 'Charisma';
        }
    }

    get value(): number {
        return this.base;
    }

    static create(props: number | AbilityScoreProps): AbilityScore {
        return new AbilityScore(typeof props === 'number' ? {base: props} : props);
    }
}
