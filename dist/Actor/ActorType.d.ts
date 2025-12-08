import { ActorAbilityScores } from "./ActorAbilityScores";
import { ArmorClass } from "../ArmorClass";
import { ActorHitPoints } from "./ActorHitPoints";
import { ActorMovementSpeeds } from "./ActorMovementSpeeds";
import { CreatureSize } from "../enums";
import { Alignment } from "../Alignment";
import { CreatureType } from "../Types/CreatureType";
export interface ActorType {
    getAlignment: () => string | undefined;
    getProficiencyBonus: () => number;
    getSize: () => string;
    getType: () => CreatureType | undefined;
    getXp(): number;
    abilities?: ActorAbilityScores;
    alignment?: Alignment[];
    armorClass?: ArmorClass;
    challengeRating?: number;
    hitPoints?: ActorHitPoints;
    isAlignmentTypically?: boolean;
    isNamedCreature?: boolean;
    movementSpeeds?: ActorMovementSpeeds;
    name?: string;
    size?: CreatureSize;
    subtype?: string;
    type?: CreatureType;
}
export type ActorTypeProps = Omit<ActorType, 'getAlignment' | 'getProficiencyBonus' | 'getSize' | 'getType' | 'getXp'>;
export declare function createActorType(data?: ActorTypeProps): ActorType;
//# sourceMappingURL=ActorType.d.ts.map