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

    get max(): number {
        let total = 0;
        this.parts.forEach(part => total += part.max);
        return total;
    }

    get min(): number {
        let total = 0;
        this.parts.forEach(part => total += part.min);
        return total;
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
        const result = [];
        formula = formula.replace(/\s/g, '');
        const individualRolls = formula.split(/[=\-]/);

        if (individualRolls === null) throw new Error(`Invalid dice formula: ${formula}`);
        else if (individualRolls.length === 0) return [];
        else {
            individualRolls.forEach(roll => {
                result.push(DiceFormulaPart.parse(roll));
            })
        }
        return result;
    }



    static create(props: DiceFormulaProps): DiceFormula {
        return new DiceFormula(props);
    }
}
