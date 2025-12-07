import { expect, test } from 'vitest';
import {parseDiceFormula} from "../src";

/**
 * Test that the formula is parsed into the correct number of parts.
 */
test.each([
    ['1d6', 1],
    ['1d6+2', 1],
    ['1d6+1d8+4', 2]
])('%s should contain %d parts', (input: string, expected: number) => {
    const formula = parseDiceFormula(input);
    expect(formula.parts?.length).toBe(expected);
})

test.each([
    ['1d6', '1d6'],
    ['d6', '1d6'],
    ['d6+1', '1d6 + 1'],
    ['1d6+1d8+4', '1d6 + 1d8 + 4']
])('%s toString() should be %s', (input: string, expected: string) => {
    const formula = parseDiceFormula(input);
    expect(formula.toString()).toBe(expected);
});
