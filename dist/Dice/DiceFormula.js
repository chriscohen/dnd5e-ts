"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiceFormula = createDiceFormula;
exports.parseDiceFormula = parseDiceFormula;
const DiceFormulaPart_1 = require("~/Dice/DiceFormulaPart");
function createDiceFormula(data) {
    const lastResult = [];
    const parts = [];
    const hasRolled = () => {
        return lastResult !== undefined;
    };
    const max = () => {
        let total = 0;
        parts.forEach(part => total += part.max());
        return total;
    };
    const min = () => {
        let total = 0;
        parts.forEach(part => total += part.min());
        return total;
    };
    const roll = () => {
        const results = [];
        parts.forEach((part) => {
            part.roll;
            // @ts-ignore
            results.push(part.hasRolled() ? part.lastResult : []);
        });
        return results;
    };
    return {
        ...data,
        max,
        min,
        roll
    };
}
function parseDiceFormula(formula) {
    const result = [];
    formula = formula.replace(/\s/g, '');
    const individualRolls = formula.split(/[=\-]/);
    if (individualRolls === null)
        throw new Error(`Invalid dice formula: ${formula}`);
    else if (individualRolls.length === 0)
        return [];
    else {
        individualRolls.forEach(roll => {
            result.push((0, DiceFormulaPart_1.parseDiceFormulaPart)(roll));
        });
    }
    return result;
}
