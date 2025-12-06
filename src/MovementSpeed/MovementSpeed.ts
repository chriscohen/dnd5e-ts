import {MovementType} from "~/classes/enums";

export type MovementSpeedProps = {
    type?: MovementType;
    base?: number;
    isMetric?: boolean;
};

export class MovementSpeed {

    type?: MovementType = MovementType.WALK
    base?: number;

    /**
     * @property {boolean} isMetric
     * @default false
     *
     * Indicates whether the movement speed is in metric units or imperial units.
     */
    isMetric?: boolean = false;

    constructor(props: MovementSpeedProps = {}) {
        this.type = props.type ?? MovementType.WALK;
        this.base = props.base ?? undefined;
        this.isMetric = props.isMetric ?? false;
    }

    static create(props: number | MovementSpeedProps): MovementSpeed | undefined {
        // A raw number was passed in for a movement speed.
        if (typeof(props) === 'number') {
            // If the movement speed is 0, this creature doesn't have a movement speed of this kind, so we will return
            // 'undefined'.
            return props === 0 ? undefined : new MovementSpeed({base: props});
        }

        // A MovementSpeedProps object was passed in.
        return new MovementSpeed(props);
    }
}
