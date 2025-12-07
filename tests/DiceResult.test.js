"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var DiceFormula_1 = require("~/Dice/DiceFormula");
(0, vitest_1.test)('Rolling 1d6', function () {
    var formula = new DiceFormula_1.DiceFormula('1d  6');
    console.log(formula);
    (0, vitest_1.expect)(formula.parts.length).toBe(1);
    formula.roll();
});
