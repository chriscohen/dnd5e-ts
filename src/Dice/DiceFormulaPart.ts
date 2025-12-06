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

    get n(): number {
        return this.numberOfDice;
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
