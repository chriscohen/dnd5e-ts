import {DiceFormulaPart} from "~/Dice/DiceFormulaPart";
import {DiceResult} from "~/Dice/DiceResult";

export type DiceFormulaProps = {
    parts?: DiceFormulaPart[];
    lastResult?: DiceResult[];
}

export class DiceFormula {
    parts: DiceFormulaPart[] = [];
    lastResult: DiceResult[] = [];

    constructor(props: string | DiceFormulaProps = {}) {
        if (typeof(props) === 'string') {
            this.parts = DiceFormula.parse(props);
        } else {
            this.parts = props.parts ?? [];
        }

    }

    get hasRolled(): boolean {
        return this.lastResult !== undefined;
    }

    roll(): DiceResult[] {
        const results = [];
        this.parts.forEach((part) => {
            part.roll
            results.push(part.lastResult);
        });

        return results;
    }

    static parse(formula: string): DiceFormulaPart[] {
        const pieces = formula.split(/d/);

        if (pieces.length !== 2) throw new Error(`Invalid dice formula: ${formula}`);

        const numberOfDice = parseInt(pieces[0]);
        if (isNaN(numberOfDice)) throw new Error(`Invalid dice formula: ${formula}`);

        const diceFaces = parseInt(pieces[1]);
        if (isNaN(diceFaces)) throw new Error(`Invalid dice formula: ${formula}`);

        return [
            new DiceFormulaPart({
                numberOfDice: numberOfDice,
                diceFaces: diceFaces
            })
        ];
    }

    static create(props: DiceFormulaProps): DiceFormula {
        return new DiceFormula(props);
    }
}
