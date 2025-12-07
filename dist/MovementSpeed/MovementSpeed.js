"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementSpeed = void 0;
const enums_1 = require("~/enums");
class MovementSpeed {
    constructor(props = {}) {
        this.type = enums_1.MovementType.WALK;
        /**
         * @property {boolean} isMetric
         * @default false
         *
         * Indicates whether the movement speed is in metric units or imperial units.
         */
        this.isMetric = false;
        this.type = props.type ?? enums_1.MovementType.WALK;
        this.base = props.base ?? undefined;
        this.isMetric = props.isMetric ?? false;
    }
    static create(props) {
        // A raw number was passed in for a movement speed.
        if (typeof (props) === 'number') {
            // If the movement speed is 0, this creature doesn't have a movement speed of this kind, so we will return
            // 'undefined'.
            return props === 0 ? undefined : new MovementSpeed({ base: props });
        }
        // A MovementSpeedProps object was passed in.
        return new MovementSpeed(props);
    }
}
exports.MovementSpeed = MovementSpeed;
