import {ActorAbilityScores, createActorAbilityScores} from "./ActorAbilityScores";
import {ArmorClass} from "../ArmorClass";
import {ActorHitPoints, createActorHitPoints} from "./ActorHitPoints";
import {ActorMovementSpeeds} from "./ActorMovementSpeeds";
import {CreatureSize} from "../enums";
import {Alignment} from "../Alignment";
import {CR_XP} from "../constants";
import {CreatureType} from "../Types/CreatureType";

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
    isNamedCreature?: boolean
    movementSpeeds?: ActorMovementSpeeds;
    name?: string;
    size?: CreatureSize;
    subtype?: string
    type?: CreatureType;
}

export type ActorTypeProps = Omit<
    ActorType,
    'getAlignment' | 'getProficiencyBonus' | 'getSize' | 'getType' | 'getXp'
>;

export function createActorType(data: ActorTypeProps = {}): ActorType {
    const _abilities = data.abilities ?? createActorAbilityScores();
    const _alignment = data.alignment ?? [];
    const _armorClass = data.armorClass ?? undefined;
    const _challengeRating = data.challengeRating ?? 0;
    const _hitPoints = data.hitPoints ?? createActorHitPoints();
    const _isAlignmentTypically = data.isAlignmentTypically ?? false;
    const _isNamedCreature = data.isNamedCreature ?? false;
    const _movementSpeeds = data.movementSpeeds ?? undefined;
    const _name = data.name ?? 'Unnamed Creature Type';
    const _size = data.size ?? CreatureSize.MEDIUM;
    const _subtype = data.subtype;
    const _type = data.type;

    function getAlignment(this: ActorType): string | undefined {
        if (this.alignment?.length === 0) return undefined;

        let output = this.isAlignmentTypically ? 'Typically ' : '';
        return this.alignment ?
            output + this.alignment.map(alignment => alignment.toString()).join(' or ') :
            undefined;
    }

    function getProficiencyBonus(this: ActorType): number {
        return this.challengeRating ?
            2 + Math.max(Math.floor((this.challengeRating - 1) / 4), 0) :
            2;
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

    function getType(this: ActorType): CreatureType | undefined {
        return this.type;
    }

    function getXp(this: ActorType): number {
        if (!this.challengeRating) return 0;

        // @ts-ignore
        const xp = CR_XP[this.challengeRating]
        return xp ? xp : 0;
    }

    return {
        getAlignment,
        getProficiencyBonus,
        getSize,
        getType,
        getXp,

        abilities: _abilities,
        alignment: _alignment,
        armorClass: _armorClass,
        challengeRating: _challengeRating,
        hitPoints: _hitPoints,
        isAlignmentTypically: _isAlignmentTypically,
        isNamedCreature: _isNamedCreature,
        movementSpeeds: _movementSpeeds,
        name: _name,
        size: _size,
        subtype: _subtype,
        type: _type
    }
}
