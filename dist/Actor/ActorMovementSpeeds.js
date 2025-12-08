"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorMovementSpeeds = createActorMovementSpeeds;
const MovementSpeed_1 = require("../MovementSpeed/MovementSpeed");
function createActorMovementSpeeds(data = {}) {
    const _burrow = typeof data.burrow === 'number' ? (0, MovementSpeed_1.createMovementSpeed)({ base: data.burrow }) : data.burrow;
    const _climb = typeof data.climb === 'number' ? (0, MovementSpeed_1.createMovementSpeed)({ base: data.climb }) : data.climb;
    const _fly = typeof data.fly === 'number' ? (0, MovementSpeed_1.createMovementSpeed)({ base: data.fly }) : data.fly;
    const _swim = typeof data.swim === 'number' ? (0, MovementSpeed_1.createMovementSpeed)({ base: data.swim }) : data.swim;
    const _walk = typeof data.walk === 'number' ? (0, MovementSpeed_1.createMovementSpeed)({ base: data.walk }) : data.walk;
    return {
        burrow: _burrow,
        climb: _climb,
        fly: _fly,
        swim: _swim,
        walk: _walk
    };
}
