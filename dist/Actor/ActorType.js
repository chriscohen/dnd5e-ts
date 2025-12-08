"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorType = createActorType;
const ActorAbilityScores_1 = require("./ActorAbilityScores");
const ActorHitPoints_1 = require("./ActorHitPoints");
const enums_1 = require("../enums");
const constants_1 = require("../constants");
function createActorType(data = {}) {
    const _abilities = data.abilities ?? (0, ActorAbilityScores_1.createActorAbilityScores)();
    const _alignment = data.alignment ?? [];
    const _armorClass = data.armorClass ?? undefined;
    const _challengeRating = data.challengeRating ?? 0;
    const _hitPoints = data.hitPoints ?? (0, ActorHitPoints_1.createActorHitPoints)();
    const _isAlignmentTypically = data.isAlignmentTypically ?? false;
    const _isNamedCreature = data.isNamedCreature ?? false;
    const _movementSpeeds = data.movementSpeeds ?? undefined;
    const _name = data.name ?? 'Unnamed Creature Type';
    const _size = data.size ?? enums_1.CreatureSize.MEDIUM;
    const _subtype = data.subtype;
    const _type = data.type;
    function getAlignment() {
        if (this.alignment?.length === 0)
            return undefined;
        let output = this.isAlignmentTypically ? 'Typically ' : '';
        return this.alignment ?
            output + this.alignment.map(alignment => alignment.toString()).join(' or ') :
            undefined;
    }
    function getProficiencyBonus() {
        return this.challengeRating ?
            2 + Math.max(Math.floor((this.challengeRating - 1) / 4), 0) :
            2;
    }
    function getSize() {
        switch (this.size) {
            case enums_1.CreatureSize.TINY: return 'Tiny';
            case enums_1.CreatureSize.SMALL: return 'Small';
            default:
            case enums_1.CreatureSize.MEDIUM: return 'Medium';
            case enums_1.CreatureSize.LARGE: return 'Large';
            case enums_1.CreatureSize.HUGE: return 'Huge';
            case enums_1.CreatureSize.GARGANTUAN: return 'Gargantuan';
        }
    }
    function getType() {
        return this.type;
    }
    function getXp() {
        if (!this.challengeRating)
            return 0;
        // @ts-ignore
        const xp = constants_1.CR_XP[this.challengeRating];
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
    };
}
