import {randomInt} from "node:crypto";
import {createDiceResult, DiceResult} from "~/Dice/DiceResult";

export interface DiceFormulaPart {
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult;

    diceFaces?: number;
    numberOfDice?: number;
    lastResult?: DiceResult;
    modifier?: number;
}

export type DiceFormulaPartProps = Omit<DiceFormulaPart, 'hasRolled' | 'max' | 'min' | 'roll'>;

export function createDiceFormulaPart(data: DiceFormulaPartProps = {}): DiceFormulaPart {
    const diceFaces: number = data.diceFaces ?? 6;
    let lastResult: DiceResult | undefined = data.lastResult ?? undefined;
    const modifier: number = data.modifier ?? 0;
    const numberOfDice: number = data.numberOfDice ?? 1;

    const hasRolled = (): boolean => {
        return lastResult !== undefined;
    };
    const max = (): number => {
        return diceFaces * numberOfDice + modifier;
    };
    const min = (): number => {
        return numberOfDice + modifier;
    }

    const roll = (): DiceResult => {
        const rolls = Array(numberOfDice).fill(0).map(() => randomInt(1, diceFaces));
        lastResult = createDiceResult({
            rolls: rolls,
            modifier: modifier,
            total: rolls.reduce((a, b) => a + b, 0) + modifier
        });
        return lastResult;
    }

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
        modifier,
        numberOfDice
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
        diceFaces: parseInt(matches[2]),
        modifier: parseInt(matches[3])
    });
}
