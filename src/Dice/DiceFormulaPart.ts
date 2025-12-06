import {randomInt} from "node:crypto";
import {DiceResult} from "~/Dice/DiceResult";

export type DiceFormulaPartProps = {
    diceFaces?: number;
    numberOfDice?: number;
    modifier?: number;
}

export class DiceFormulaPart {
    diceFaces: number = 6;
    numberOfDice: number = 1;
    modifier: number = 0;
    lastResult: DiceResult | undefined;

    get f(): number {
        return this.diceFaces;
    }

    get hasRolled(): boolean {
        return this.lastResult !== undefined;
    }

    get max(): number {
        return this.diceFaces * this.numberOfDice + this.modifier;
    }

    get min(): number {
        return this.numberOfDice + this.modifier;
    }

    get n(): number {
        return this.numberOfDice;
    }

    static parse(formula: string): DiceFormulaPart {
        const matches = formula.match(/^(\d+)?d(\d+)(?:\s*([+-]\d+))?$/i);

        if (!matches) throw new Error(`Invalid dice formula: ${formula}`);

        // The number of dice might be missing, so we default to 1. Same with modifier, which defaults to 0.
        if (!matches[1]) matches[1] = '1';
        if (!matches[3]) matches[3] = '0';

        return new DiceFormulaPart({
            numberOfDice: parseInt(matches[1]),
            diceFaces: parseInt(matches[2]),
            modifier: parseInt(matches[3])
        });
    }

    get roll(): DiceResult {
        const rolls = Array(this.numberOfDice).fill(0).map(() => randomInt(1, this.diceFaces));
        this.lastResult = new DiceResult({
            rolls: rolls,
            modifier: this.modifier,
            total: rolls.reduce((a, b) => a + b, 0) + this.modifier
        });
        return this.lastResult;
    }

    constructor(props: DiceFormulaPartProps = {}) {
        this.diceFaces = props.diceFaces ?? 6;
        this.numberOfDice = props.numberOfDice ?? 1;
        this.modifier = props.modifier ?? 0;
    }

    static create(props: DiceFormulaPartProps): DiceFormulaPart {
        return new DiceFormulaPart(props);
    }
}
