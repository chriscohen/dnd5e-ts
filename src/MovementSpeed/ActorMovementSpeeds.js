"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorMovementSpeeds = void 0;
var MovementSpeed_1 = require("~/MovementSpeed/MovementSpeed");
var ActorMovementSpeeds = /** @class */ (function () {
    function ActorMovementSpeeds(props) {
        if (props === void 0) { props = {
            burrow: 0,
            climb: 0,
            fly: 0,
            swim: 0,
            walk: 0
        }; }
        this.burrow = MovementSpeed_1.MovementSpeed.create(props === null || props === void 0 ? void 0 : props.burrow);
        this.climb = MovementSpeed_1.MovementSpeed.create(props === null || props === void 0 ? void 0 : props.climb);
        this.fly = MovementSpeed_1.MovementSpeed.create(props === null || props === void 0 ? void 0 : props.fly);
        this.swim = MovementSpeed_1.MovementSpeed.create(props === null || props === void 0 ? void 0 : props.swim);
        this.walk = MovementSpeed_1.MovementSpeed.create(props === null || props === void 0 ? void 0 : props.walk);
    }
    return ActorMovementSpeeds;
}());
exports.ActorMovementSpeeds = ActorMovementSpeeds;
