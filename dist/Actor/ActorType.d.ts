import { ActorAbilityScores } from "./ActorAbilityScores";
import { ArmorClass } from "../ArmorClass";
import { ActorHitPoints } from "./ActorHitPoints";
import { ActorMovementSpeeds } from "../MovementSpeed/ActorMovementSpeeds";
import { CreatureSize, CreatureType } from "../enums";
import { Alignment } from "../Alignment";
export interface ActorType {
    getAlignment: () => string | undefined;
    getSize: () => string;
    getType: () => string;
    abilities?: ActorAbilityScores;
    alignments?: Alignment[];
    armorClass?: ArmorClass;
    hitPoints?: ActorHitPoints;
    isAlignmentTypically?: boolean;
    movementSpeeds?: ActorMovementSpeeds;
    size?: CreatureSize;
    subtype?: string;
    type?: CreatureType;
}
export type ActorTypeProps = Omit<ActorType, 'getAlignment' | 'getSize' | 'getType'>;
export declare function createActorType(data?: ActorTypeProps): ActorType;
//# sourceMappingURL=ActorType.d.ts.map