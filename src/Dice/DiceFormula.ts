import {DiceFormulaPart, parseDiceFormulaPart} from "./DiceFormulaPart";
import {DiceResult} from "./DiceResult";

export interface DiceFormula {
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult[];

    parts?: DiceFormulaPart[];
    lastResult: DiceResult[];
}

export type DiceFormulaProps = Omit<DiceFormula, 'hasRolled' | 'max' | 'min' | 'roll'>;

export function createDiceFormula(data: DiceFormulaProps = {lastResult: []}): DiceFormula {
    let lastResult: DiceResult[] = [];
    const parts: DiceFormulaPart[] = [];

    const hasRolled = (): boolean => {
        return lastResult !== undefined;
    }

    const max = (): number => {
        let total = 0;
        parts.forEach(part => total += part.max());
        return total;
    }

    const min = (): number => {
        let total = 0;
        parts.forEach(part => total += part.min());
        return total;
    }

    const roll = (): DiceResult[] => {
        const results: DiceResult[] = [];

        parts.forEach((part) => {
            part.roll
            // @ts-ignore
            results.push(part.hasRolled() ? part.lastResult : []);
        });

        lastResult = results;
        return results;
    }

    return {
        ...data,
        hasRolled,
        max,
        min,
        roll
    }
}

export function parseDiceFormula(formula: string): DiceFormula {
    const result: DiceFormulaPart[] = [];
    formula = formula.replace(/\s/g, '');
    const individualRolls = formula.split(/[=\-]/);

    if (individualRolls === null) throw new Error(`Invalid dice formula: ${formula}`);
    else if (individualRolls.length === 0) throw new Error(`Invalid dice formula: ${formula}`);
    else {
        individualRolls.forEach(roll => {
            result.push(parseDiceFormulaPart(roll));
        })
    }
    const output = createDiceFormula();
    output.parts = result;
    return output;
}
