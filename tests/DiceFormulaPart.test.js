"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var DiceFormulaPart_1 = require("~/Dice/DiceFormulaPart");
(0, vitest_1.test)('Before DiceFormulaPart.roll(), result is empty', function () {
    var notRolled = new DiceFormulaPart_1.DiceFormulaPart();
    var rolled = new DiceFormulaPart_1.DiceFormulaPart();
    rolled.roll;
    (0, vitest_1.expect)(notRolled.hasRolled).toBe(false);
    (0, vitest_1.expect)(rolled.hasRolled).toBe(true);
});
/**
 * Test that the max value of a dice formula is correct.
 */
vitest_1.test.each([
    ['1d8', 8],
    ['1d8+2', 10],
    ['1d8-2', 6]
])('Test %s maximum is %i', function (input, max) {
    var part = DiceFormulaPart_1.DiceFormulaPart.parse(input);
    (0, vitest_1.expect)(part.max).toBe(max);
});
/**
 * Test that the min value of a dice formula is correct.
 */
vitest_1.test.each([
    ['1d8', 1],
    ['1d8+2', 3],
    ['1d8-2', -1]
])('Test %s minimum is %i', function (input, min) {
    var part = DiceFormulaPart_1.DiceFormulaPart.parse(input);
    (0, vitest_1.expect)(part.min).toBe(min);
});
/**
 * Test that when we parse a dice formula, we get the correct values back.
 */
vitest_1.test.each([
    ['d6', 1, 6, 0],
    ['1d6', 1, 6, 0],
    ['1d6+2', 1, 6, 2],
    ['d20+10', 1, 20, 10],
])('Parse single dice formula', function (input, numberOfDice, diceFaces, modifier) {
    var result = DiceFormulaPart_1.DiceFormulaPart.parse(input);
    (0, vitest_1.expect)(result.numberOfDice).toBe(numberOfDice);
    (0, vitest_1.expect)(result.diceFaces).toBe(diceFaces);
    (0, vitest_1.expect)(result.modifier).toBe(modifier);
});
