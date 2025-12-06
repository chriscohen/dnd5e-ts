import {MovementSpeed} from "~/classes/MovementSpeed/MovementSpeed";
import {MovementType} from "~/classes/enums";

export type ActorMovementSpeedsProps = {
    burrow: number | MovementSpeed;
    climb: number | MovementSpeed;
    fly: number | MovementSpeed;
    swim: number | MovementSpeed;
    walk: number | MovementSpeed;
};

export class ActorMovementSpeeds {
    burrow?: MovementSpeed;
    climb?: MovementSpeed;
    fly?: MovementSpeed;
    swim?: MovementSpeed;
    walk?: MovementSpeed;

    constructor(props: ActorMovementSpeedsProps = {
        burrow: 0,
        climb: 0,
        fly: 0,
        swim: 0,
        walk: 0
    }) {
        this.burrow = MovementSpeed.create(props?.burrow);
        this.climb = MovementSpeed.create(props?.climb);
    }
}
