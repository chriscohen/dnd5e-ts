import {DiceFormulaPart, parseDiceFormulaPart} from "~/Dice/DiceFormulaPart";
import {DiceResult} from "~/Dice/DiceResult";

export interface DiceFormula {
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult[];

    parts?: DiceFormulaPart[];
    lastResult: DiceResult[];
}

export function createDiceFormula(data: DiceFormula): DiceFormula {
    const lastResult: DiceResult[] = [];
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

        return results;
    }

    return {
        ...data,
        max,
        min,
        roll
    }
}

export function parseDiceFormula(formula: string): DiceFormulaPart[] {
    const result: DiceFormulaPart[] = [];
    formula = formula.replace(/\s/g, '');
    const individualRolls = formula.split(/[=\-]/);

    if (individualRolls === null) throw new Error(`Invalid dice formula: ${formula}`);
    else if (individualRolls.length === 0) return [];
    else {
        individualRolls.forEach(roll => {
            result.push(parseDiceFormulaPart(roll));
        })
    }
    return result;
}
