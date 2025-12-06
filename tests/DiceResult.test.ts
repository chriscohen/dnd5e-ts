import { expect, test } from 'vitest';
import {DiceFormula} from "~/Dice/DiceFormula";

test('Rolling 1d6', () => {
    const formula = new DiceFormula('1d6');
    console.log(formula);

    expect(formula.parts.length).toBe(1);

    formula.roll();
});

