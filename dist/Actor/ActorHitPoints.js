"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorHitPoints = createActorHitPoints;
function createActorHitPoints(data = {}) {
    const average = data.average ?? 0;
    const current = data.current ?? 0;
    const formula = data.formula ?? undefined;
    return {
        ...data,
        average,
        current,
        formula
    };
}
