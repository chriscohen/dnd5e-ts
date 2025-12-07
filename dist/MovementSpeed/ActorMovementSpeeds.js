"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorMovementSpeeds = void 0;
const MovementSpeed_1 = require("./MovementSpeed");
class ActorMovementSpeeds {
    constructor(props = {
        burrow: 0,
        climb: 0,
        fly: 0,
        swim: 0,
        walk: 0
    }) {
        this.burrow = MovementSpeed_1.MovementSpeed.create(props?.burrow);
        this.climb = MovementSpeed_1.MovementSpeed.create(props?.climb);
        this.fly = MovementSpeed_1.MovementSpeed.create(props?.fly);
        this.swim = MovementSpeed_1.MovementSpeed.create(props?.swim);
        this.walk = MovementSpeed_1.MovementSpeed.create(props?.walk);
    }
}
exports.ActorMovementSpeeds = ActorMovementSpeeds;
