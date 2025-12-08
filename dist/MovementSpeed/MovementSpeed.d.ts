import { MovementType } from "../enums";
export interface MovementSpeed {
    base?: number;
    canHover?: boolean;
    isMetric?: boolean;
    type?: MovementType;
}
export declare function createMovementSpeed(data: MovementSpeed): MovementSpeed;
//# sourceMappingURL=MovementSpeed.d.ts.map