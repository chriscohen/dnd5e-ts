import { MovementSpeed } from "./MovementSpeed";
export type ActorMovementSpeedsProps = {
    burrow: number | MovementSpeed;
    climb: number | MovementSpeed;
    fly: number | MovementSpeed;
    swim: number | MovementSpeed;
    walk: number | MovementSpeed;
};
export declare class ActorMovementSpeeds {
    burrow?: MovementSpeed;
    climb?: MovementSpeed;
    fly?: MovementSpeed;
    swim?: MovementSpeed;
    walk?: MovementSpeed;
    constructor(props?: ActorMovementSpeedsProps);
}
//# sourceMappingURL=ActorMovementSpeeds.d.ts.map