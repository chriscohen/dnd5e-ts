import {ActorAbilityScores} from "./ActorAbilityScores";
import {ArmorClass} from "../ArmorClass";
import {ActorHitPoints} from "./ActorHitPoints";
import {ActorMovementSpeeds} from "../MovementSpeed/ActorMovementSpeeds";

export interface ActorType {
    abilities?: ActorAbilityScores;
    armorClass?: ArmorClass;
    hitPoints?: ActorHitPoints;
    movementSpeeds?: ActorMovementSpeeds;
}

export function createActorType(data: ActorType = {}): ActorType {
    const instance = {}

    return {
        ...data,
        ...instance
    }
}
