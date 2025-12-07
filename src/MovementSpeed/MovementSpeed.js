"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementSpeed = void 0;
var enums_1 = require("~/enums");
var MovementSpeed = /** @class */ (function () {
    function MovementSpeed(props) {
        if (props === void 0) { props = {}; }
        var _a, _b, _c;
        this.type = enums_1.MovementType.WALK;
        /**
         * @property {boolean} isMetric
         * @default false
         *
         * Indicates whether the movement speed is in metric units or imperial units.
         */
        this.isMetric = false;
        this.type = (_a = props.type) !== null && _a !== void 0 ? _a : enums_1.MovementType.WALK;
        this.base = (_b = props.base) !== null && _b !== void 0 ? _b : undefined;
        this.isMetric = (_c = props.isMetric) !== null && _c !== void 0 ? _c : false;
    }
    MovementSpeed.create = function (props) {
        // A raw number was passed in for a movement speed.
        if (typeof (props) === 'number') {
            // If the movement speed is 0, this creature doesn't have a movement speed of this kind, so we will return
            // 'undefined'.
            return props === 0 ? undefined : new MovementSpeed({ base: props });
        }
        // A MovementSpeedProps object was passed in.
        return new MovementSpeed(props);
    };
    return MovementSpeed;
}());
exports.MovementSpeed = MovementSpeed;
