import {MovementType} from "../enums";

export interface MovementSpeed {
    base?: number;
    canHover?: boolean;
    isMetric?: boolean;
    type?: MovementType;
}

export function createMovementSpeed(data: MovementSpeed): MovementSpeed {
    const _base: number = data.base ?? 0;
    const _isMetric: boolean = data.isMetric ?? false;
    const _canHover: boolean = data.canHover ?? false;
    const _type: MovementType = data.type ?? MovementType.WALK;

    return {
        base: _base,
        isMetric: _isMetric,
        type: _type
    }
}
