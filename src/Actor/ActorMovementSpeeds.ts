import {createMovementSpeed, MovementSpeed} from "../MovementSpeed/MovementSpeed";

export interface ActorMovementSpeeds {
    burrow?: MovementSpeed | number;
    climb?: MovementSpeed | number;
    fly?: MovementSpeed | number;
    swim?: MovementSpeed | number;
    walk?: MovementSpeed | number;
}

export function createActorMovementSpeeds(data: ActorMovementSpeeds = {}) {
    const _burrow: MovementSpeed | undefined =
        typeof data.burrow === 'number' ? createMovementSpeed({base: data.burrow}) : data.burrow;
    const _climb: MovementSpeed | undefined =
        typeof data.climb === 'number' ? createMovementSpeed({base: data.climb}) : data.climb;
    const _fly: MovementSpeed | undefined =
        typeof data.fly === 'number' ? createMovementSpeed({base: data.fly}) : data.fly;
    const _swim: MovementSpeed | undefined =
        typeof data.swim === 'number' ? createMovementSpeed({base: data.swim}) : data.swim;
    const _walk: MovementSpeed | undefined =
        typeof data.walk === 'number' ? createMovementSpeed({base: data.walk}) : data.walk;

    return {
        burrow: _burrow,
        climb: _climb,
        fly: _fly,
        swim: _swim,
        walk: _walk
    }
}
