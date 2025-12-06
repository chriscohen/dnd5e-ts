import {AbilityScore, type AbilityScoreProps} from "~/AbilityScore/AbilityScore";
import {AbilityType} from "~/enums";

export type AbilitiesProps = {
    str: number | AbilityScoreProps;
    dex: number | AbilityScoreProps;
    con: number | AbilityScoreProps;
    int: number | AbilityScoreProps;
    wis: number | AbilityScoreProps;
    cha: number | AbilityScoreProps;
}

export class ActorAbilityScores {
    str: AbilityScore;
    dex: AbilityScore;
    con: AbilityScore;
    int: AbilityScore;
    wis: AbilityScore;
    cha: AbilityScore;

    constructor(
        str?: number | AbilityScoreProps,
        dex?: number | AbilityScoreProps,
        con?: number | AbilityScoreProps,
        int?: number | AbilityScoreProps,
        wis?: number | AbilityScoreProps,
        cha?: number | AbilityScoreProps
    ) {
        if (str === undefined) this.str = AbilityScore.create({type: AbilityType.STR})
        else this.str = AbilityScore.create(str);

        if (dex === undefined) this.dex = AbilityScore.create({type: AbilityType.DEX})
        else this.dex = AbilityScore.create(dex);

        if (con === undefined) this.con = AbilityScore.create({type: AbilityType.CON})
        else this.con = AbilityScore.create(con);

        if (int === undefined) this.int = AbilityScore.create({type: AbilityType.INT})
        else this.int = AbilityScore.create(int);

        if (wis === undefined) this.wis = AbilityScore.create({type: AbilityType.WIS})
        else this.wis = AbilityScore.create(wis);

        if (cha === undefined) this.cha = AbilityScore.create({type: AbilityType.CHA})
        else this.cha = AbilityScore.create(cha);
    }

    static create(props: AbilitiesProps = {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    }): ActorAbilityScores {
        return new ActorAbilityScores(props.str, props.dex, props.con, props.int, props.wis, props.cha);
    }
}
