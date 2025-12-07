"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const FeTools_1 = require("~/FeTools/FeTools");
(0, vitest_1.test)('sample', async () => {
    console.log("running sample test");
    const result = await (0, FeTools_1.importFrom5eTools)('refs/heads/main/data/bestiary/bestiary-aatm.json');
    console.log(result);
    (0, vitest_1.expect)(true).toBe(true);
});
