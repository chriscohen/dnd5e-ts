import { MovementType } from "~/enums";
export type MovementSpeedProps = {
    type?: MovementType;
    base?: number;
    isMetric?: boolean;
};
export declare class MovementSpeed {
    type?: MovementType;
    base?: number;
    /**
     * @property {boolean} isMetric
     * @default false
     *
     * Indicates whether the movement speed is in metric units or imperial units.
     */
    isMetric?: boolean;
    constructor(props?: MovementSpeedProps);
    static create(props: number | MovementSpeedProps): MovementSpeed | undefined;
}
//# sourceMappingURL=MovementSpeed.d.ts.map