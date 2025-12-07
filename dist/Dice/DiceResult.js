"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiceResult = createDiceResult;
function createDiceResult(data = {}) {
    const total = data.total ?? 0;
    const rolls = data.rolls ?? [];
    const modifier = data.modifier ?? 0;
    return {
        ...data,
        total,
        rolls,
        modifier
    };
}
