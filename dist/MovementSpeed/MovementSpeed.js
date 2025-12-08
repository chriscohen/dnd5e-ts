"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovementSpeed = createMovementSpeed;
const enums_1 = require("../enums");
function createMovementSpeed(data) {
    const _base = data.base ?? 0;
    const _isMetric = data.isMetric ?? false;
    const _canHover = data.canHover ?? false;
    const _type = data.type ?? enums_1.MovementType.WALK;
    return {
        base: _base,
        isMetric: _isMetric,
        type: _type
    };
}
