"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorType = createActorType;
function createActorType(data = {}) {
    const instance = {};
    return {
        ...data,
        ...instance
    };
}
