import {ActorAbilityScores, type AbilitiesProps} from "~/Actor/ActorAbilityScores";
import {ArmorClass} from "~/ArmorClass";
import {ActorHitPoints} from "~/Actor/ActorHitPoints";
import {ActorMovementSpeeds} from "~/MovementSpeed/ActorMovementSpeeds";

export type ActorProps = {
    abilities?: AbilitiesProps;
    armorClass?: ArmorClass;
    hitPoints?: ActorHitPoints;
    movementSpeeds?: ActorMovementSpeeds;
};

export class ActorType {
    abilities: ActorAbilityScores;
    armorClass: ArmorClass;
    hitPoints: ActorHitPoints;
    movementSpeeds: ActorMovementSpeeds;

    constructor(props?: ActorProps) {
        this.abilities = ActorAbilityScores.create(props?.abilities);
        this.armorClass = props?.armorClass ?? new ArmorClass();
        this.hitPoints = props?.hitPoints ?? new ActorHitPoints();
        this.movementSpeeds = props?.movementSpeeds ?? new ActorMovementSpeeds();
    }

    static create(props: ActorProps): ActorType {
        return new ActorType(props);
    }
}
