import {ActorAbilityScores, createActorAbilityScores} from "./ActorAbilityScores";
import {ArmorClass} from "../ArmorClass";
import {ActorHitPoints, createActorHitPoints} from "./ActorHitPoints";
import {ActorMovementSpeeds} from "../MovementSpeed/ActorMovementSpeeds";
import {CreatureSize, CreatureType} from "../enums";
import {Alignment} from "../Alignment";

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
    subtype?: string
    type?: CreatureType;
}

export type ActorTypeProps = Omit<ActorType, 'getAlignment' | 'getSize' | 'getType'>;

export function createActorType(data: ActorTypeProps = {}): ActorType {
    const abilities = data.abilities ?? createActorAbilityScores();
    const armorClass = data.armorClass ?? undefined;
    const hitPoints = data.hitPoints ?? createActorHitPoints();
    const initialIsAlignmentTypically = data.isAlignmentTypically ?? false;
    const movementSpeeds = data.movementSpeeds ?? undefined;
    const initialSize = data.size ?? CreatureSize.MEDIUM;
    const initialSubtype = data.subtype;
    const initialType = data.type ?? CreatureType.HUMANOID;

    function getAlignment(this: ActorType): string | undefined {
        let output = this.isAlignmentTypically ? 'typically ' : '';
        return this.alignments ?
            output + this.alignments.map(alignment => alignment.toString()).join(' or ') :
            undefined;
    }

    function getSize(this: ActorType): string {
        switch (this.size) {
            case CreatureSize.TINY: return 'Tiny';
            case CreatureSize.SMALL: return 'Small';
            default:
            case CreatureSize.MEDIUM: return 'Medium';
            case CreatureSize.LARGE: return 'Large';
            case CreatureSize.HUGE: return 'Huge';
            case CreatureSize.GARGANTUAN: return 'Gargantuan';
        }
    }

    function getType(this: ActorType): string {
        switch (this.type) {
            case CreatureType.ABERRATION: return 'Aberration';
            case CreatureType.BEAST: return 'Beast';
            case CreatureType.CELESTIAL: return 'Celestial';
            case CreatureType.CONSTRUCT: return 'Construct';
            case CreatureType.DRAGON: return 'Dragon';
            case CreatureType.ELEMENTAL: return 'Elemental';
            case CreatureType.FEY: return 'Fey';
            case CreatureType.FIEND: return 'Fiend';
            case CreatureType.GIANT: return 'Giant';
            default:
            case CreatureType.HUMANOID: return 'Humanoid';
            case CreatureType.MONSTROSITY: return 'Monstrosity';
            case CreatureType.OOZE: return 'Ooze';
            case CreatureType.PLANT: return 'Plant';
            case CreatureType.UNDEAD: return 'Undead';
        }
    }

    return {
        getAlignment,
        getSize,
        getType,

        abilities,
        armorClass,
        hitPoints,
        isAlignmentTypically: initialIsAlignmentTypically,
        movementSpeeds,
        size: initialSize,
        subtype: initialSubtype,
        type: initialType
    }
}
