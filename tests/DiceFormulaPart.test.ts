import { expect, test } from 'vitest';
import {createDiceFormulaPart, parseDiceFormulaPart} from "../src";

test('Before DiceFormulaPart.roll(), result is empty', () => {
    const notRolled = createDiceFormulaPart();

    const rolled = createDiceFormulaPart();
    rolled.roll();

    expect(notRolled.hasRolled()).toBe(false);
    expect(rolled.hasRolled()).toBe(true);
});

/**
 * Test that the max value of a dice formula is correct.
 */
test.each([
    ['1d8', 8],
])('Test %s maximum is %i', (input: string, max: number) => {
    const part = parseDiceFormulaPart(input);

    expect(part.max()).toBe(max);
});

/**
 * Test that the min value of a dice formula is correct.
 */
test.each([
    ['1d8', 1]
])('Test %s minimum is %i', (input: string, min: number) => {
    const part = parseDiceFormulaPart(input);

    expect(part.min()).toBe(min);
});


/**
 * Test that when we parse a dice formula, we get the correct values back.
 */
test.each([
    ['d6', 1, 6],
    ['1d6', 1, 6],
    ['d20', 1, 20],
])('Parse single dice formula', (input: string, numberOfDice: number, diceFaces: number) => {
    const result = parseDiceFormulaPart(input);

    expect(result.numberOfDice).toBe(numberOfDice);
    expect(result.diceFaces).toBe(diceFaces);
});

/**
 * Test converting to string.
 */
test.each([
    ['1d6', '1d6'],
    ['d11', '1d11'],
    ['d20', '1d20']
])('Test %s is converted to %s', (input: string, expected: string) => {
    const result = parseDiceFormulaPart(input);
    console.log(result.toString());
    expect(result.toString()).toBe(expected);
})
