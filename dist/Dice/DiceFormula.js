"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiceFormula = createDiceFormula;
exports.parseDiceFormula = parseDiceFormula;
const DiceFormulaPart_1 = require("./DiceFormulaPart");
function createDiceFormula(data = { lastResult: [] }) {
    let lastResult = [];
    let initialModifier = data.modifier ?? 0;
    const initialParts = data.parts ?? [];
    function hasModifier() {
        return this.modifier !== 0;
    }
    const hasRolled = () => {
        return lastResult !== undefined;
    };
    function max() {
        let total = 0;
        this.parts?.forEach(part => total += part.max());
        return total;
    }
    function min() {
        let total = 0;
        this.parts?.forEach(part => total += part.min());
        return total;
    }
    function roll() {
        const results = [];
        this.parts?.forEach((part) => {
            part.roll;
            // @ts-ignore
            results.push(part.hasRolled() ? part.lastResult : []);
        });
        lastResult = results;
        return results;
    }
    function toString() {
        let output = this.parts?.map(part => part.toString()).join(' + ') ?? '';
        if (this.hasModifier())
            output += ` + ${this.modifier}`;
        return output;
    }
    return {
        hasModifier,
        hasRolled,
        lastResult,
        max,
        min,
        modifier: initialModifier,
        parts: initialParts,
        roll,
        toString
    };
}
function parseDiceFormula(formula) {
    const result = [];
    const output = createDiceFormula();
    // Remove whitespace from the formula.
    formula = formula.replace(/\s/g, '');
    // Split the formula into individual rolls by the + and - operators.
    const parts = formula.split(/[+\-]/);
    if (parts === null)
        throw new Error(`Invalid dice formula: ${formula}`);
    else if (parts.length === 0)
        throw new Error(`Invalid dice formula: ${formula}`);
    else {
        parts.forEach(part => {
            // If the part is a number, it's a modifier.
            const regex = /^\d+$/;
            if (regex.test(part)) {
                output.modifier === undefined ?
                    output.modifier = parseInt(part) :
                    output.modifier += parseInt(part);
            }
            else {
                // Otherwise, it's a dice formula part.
                result.push((0, DiceFormulaPart_1.parseDiceFormulaPart)(part));
            }
        });
    }
    output.parts = result;
    return output;
}
