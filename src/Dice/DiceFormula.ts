import {DiceFormulaPart, parseDiceFormulaPart} from "./DiceFormulaPart";
import {DiceResult} from "./DiceResult";

export interface DiceFormula {
    hasModifier: () => boolean;
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult[];
    toString: () => string;

    modifier?: number;
    parts?: DiceFormulaPart[];
    lastResult: DiceResult[];
}

export type DiceFormulaProps = Omit<DiceFormula, 'hasModifier' | 'hasRolled' | 'max' | 'min' | 'roll'>;

export function createDiceFormula(data: DiceFormulaProps = {lastResult: []}): DiceFormula {
    let lastResult: DiceResult[] = [];
    let initialModifier: number = data.modifier ?? 0;
    const initialParts: DiceFormulaPart[] = data.parts ?? [];

    function hasModifier(this: DiceFormula): boolean {
        return this.modifier !== 0;
    }

    const hasRolled = (): boolean => {
        return lastResult !== undefined;
    }

    function max(this: DiceFormula): number {
        let total = 0;
        this.parts?.forEach(part => total += part.max());
        return total;
    }

    function min(this: DiceFormula): number {
        let total = 0;
        this.parts?.forEach(part => total += part.min());
        return total;
    }

    function roll(this: DiceFormula): DiceResult[] {
        const results: DiceResult[] = [];

        this.parts?.forEach((part) => {
            part.roll
            // @ts-ignore
            results.push(part.hasRolled() ? part.lastResult : []);
        });

        lastResult = results;
        return results;
    }

    function toString(this: DiceFormula): string {
        let output = this.parts?.map(part => part.toString()).join(' + ') ?? '';
        if (this.hasModifier()) output += ` + ${this.modifier}`;
        return output;
    }

    return {
        hasModifier,
        hasRolled,
        lastResult,
        max,
        min,
        modifier: initialModifier,
        parts: initialParts,
        roll,
        toString
    }
}

export function parseDiceFormula(formula: string): DiceFormula {
    const result: DiceFormulaPart[] = [];
    const output = createDiceFormula();

    // Remove whitespace from the formula.
    formula = formula.replace(/\s/g, '');
    // Split the formula into individual rolls by the + and - operators.
    const parts = formula.split(/[+\-]/);

    if (parts === null) throw new Error(`Invalid dice formula: ${formula}`);
    else if (parts.length === 0) throw new Error(`Invalid dice formula: ${formula}`);
    else {
        parts.forEach(part => {
            // If the part is a number, it's a modifier.
            const regex = /^\d+$/
            if (regex.test(part)) {
                output.modifier === undefined ?
                    output.modifier = parseInt(part) :
                    output.modifier += parseInt(part);
            } else {
                // Otherwise, it's a dice formula part.
                result.push(parseDiceFormulaPart(part));
            }
        })
    }

    output.parts = result;
    return output;
}
