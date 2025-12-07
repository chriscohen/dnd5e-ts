"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiceFormulaPart = createDiceFormulaPart;
exports.parseDiceFormulaPart = parseDiceFormulaPart;
const node_crypto_1 = require("node:crypto");
const DiceResult_1 = require("./DiceResult");
function createDiceFormulaPart(data = {}) {
    const diceFaces = data.diceFaces ?? 6;
    let lastResult = data.lastResult ?? undefined;
    const numberOfDice = data.numberOfDice ?? 1;
    const hasRolled = () => {
        return lastResult !== undefined;
    };
    const max = () => {
        return diceFaces * numberOfDice;
    };
    const min = () => {
        return numberOfDice;
    };
    const roll = () => {
        const rolls = Array(numberOfDice).fill(0).map(() => (0, node_crypto_1.randomInt)(1, diceFaces));
        lastResult = (0, DiceResult_1.createDiceResult)({
            rolls: rolls,
            total: rolls.reduce((a, b) => a + b, 0)
        });
        return lastResult;
    };
    const toString = () => `${numberOfDice}d${diceFaces}`;
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
        diceFaces: parseInt(matches[2])
    });
}
