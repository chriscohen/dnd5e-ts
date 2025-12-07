import {randomInt} from "node:crypto";
import {createDiceResult, DiceResult} from "./DiceResult";

export interface DiceFormulaPart {
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult;
    toString: () => string;

    diceFaces?: number;
    numberOfDice?: number;
    lastResult?: DiceResult;
}

export type DiceFormulaPartProps = Omit<DiceFormulaPart, 'hasRolled' | 'max' | 'min' | 'roll'>;

export function createDiceFormulaPart(data: DiceFormulaPartProps = {}): DiceFormulaPart {
    const diceFaces: number = data.diceFaces ?? 6;
    let lastResult: DiceResult | undefined = data.lastResult ?? undefined;
    const numberOfDice: number = data.numberOfDice ?? 1;

    const hasRolled = (): boolean => {
        return lastResult !== undefined;
    };
    const max = (): number => {
        return diceFaces * numberOfDice;
    };
    const min = (): number => {
        return numberOfDice;
    }

    const roll = (): DiceResult => {
        const rolls = Array(numberOfDice).fill(0).map(() => randomInt(1, diceFaces));
        lastResult = createDiceResult({
            rolls: rolls,
            total: rolls.reduce((a, b) => a + b, 0)
        });
        return lastResult;
    }

    const toString = (): string => `${numberOfDice}d${diceFaces}`

    return {
        ...data,

        // Methods.
        hasRolled,
        max,
        min,
        roll,

        // Properties.
        diceFaces,
        lastResult,
        numberOfDice,
        toString
    }
}

export function parseDiceFormulaPart(formula: string): DiceFormulaPart {
    const matches = formula.match(/^(\d+)?d(\d+)(?:\s*([+-]\d+))?$/i);

    if (!matches) throw new Error(`Invalid dice formula: ${formula}`);

    // The number of dice might be missing, so we default to 1. Same with modifier, which defaults to 0.
    if (!matches[1]) matches[1] = '1';
    if (!matches[3]) matches[3] = '0';

    return createDiceFormulaPart({
        numberOfDice: parseInt(matches[1]),
        diceFaces: parseInt(matches[2])
    });
}
