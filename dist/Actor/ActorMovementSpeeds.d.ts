import { MovementSpeed } from "../MovementSpeed/MovementSpeed";
export interface ActorMovementSpeeds {
    burrow?: MovementSpeed | number;
    climb?: MovementSpeed | number;
    fly?: MovementSpeed | number;
    swim?: MovementSpeed | number;
    walk?: MovementSpeed | number;
}
export declare function createActorMovementSpeeds(data?: ActorMovementSpeeds): {
    burrow: MovementSpeed | undefined;
    climb: MovementSpeed | undefined;
    fly: MovementSpeed | undefined;
    swim: MovementSpeed | undefined;
    walk: MovementSpeed | undefined;
};
//# sourceMappingURL=ActorMovementSpeeds.d.ts.map