"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiceFormulaPart = createDiceFormulaPart;
exports.parseDiceFormulaPart = parseDiceFormulaPart;
const node_crypto_1 = require("node:crypto");
function createDiceFormulaPart(data = {}) {
    const diceFaces = 6;
    let lastResult;
    const modifier = 0;
    const numberOfDice = 1;
    const hasRolled = () => {
        return lastResult !== undefined;
    };
    const max = () => {
        return diceFaces * numberOfDice + modifier;
    };
    const min = () => {
        return numberOfDice + modifier;
    };
    const roll = () => {
        const rolls = Array(numberOfDice).fill(0).map(() => (0, node_crypto_1.randomInt)(1, diceFaces));
        lastResult = {
            rolls: rolls,
            modifier: modifier,
            total: rolls.reduce((a, b) => a + b, 0) + modifier
        };
        return lastResult;
    };
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
    };
}
function parseDiceFormulaPart(formula) {
    const matches = formula.match(/^(\d+)?d(\d+)(?:\s*([+-]\d+))?$/i);
    if (!matches)
        throw new Error(`Invalid dice formula: ${formula}`);
    // The number of dice might be missing, so we default to 1. Same with modifier, which defaults to 0.
    if (!matches[1])
        matches[1] = '1';
    if (!matches[3])
        matches[3] = '0';
    return createDiceFormulaPart({
        numberOfDice: parseInt(matches[1]),
        diceFaces: parseInt(matches[2]),
        modifier: parseInt(matches[3])
    });
}
