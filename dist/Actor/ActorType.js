"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorType = createActorType;
const ActorAbilityScores_1 = require("./ActorAbilityScores");
const ActorHitPoints_1 = require("./ActorHitPoints");
const enums_1 = require("../enums");
function createActorType(data = {}) {
    const abilities = data.abilities ?? (0, ActorAbilityScores_1.createActorAbilityScores)();
    const armorClass = data.armorClass ?? undefined;
    const hitPoints = data.hitPoints ?? (0, ActorHitPoints_1.createActorHitPoints)();
    const initialIsAlignmentTypically = data.isAlignmentTypically ?? false;
    const movementSpeeds = data.movementSpeeds ?? undefined;
    const initialSize = data.size ?? enums_1.CreatureSize.MEDIUM;
    const initialSubtype = data.subtype;
    const initialType = data.type ?? enums_1.CreatureType.HUMANOID;
    function getAlignment() {
        let output = this.isAlignmentTypically ? 'typically ' : '';
        return this.alignments ?
            output + this.alignments.map(alignment => alignment.toString()).join(' or ') :
            undefined;
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
        switch (this.type) {
            case enums_1.CreatureType.ABERRATION: return 'Aberration';
            case enums_1.CreatureType.BEAST: return 'Beast';
            case enums_1.CreatureType.CELESTIAL: return 'Celestial';
            case enums_1.CreatureType.CONSTRUCT: return 'Construct';
            case enums_1.CreatureType.DRAGON: return 'Dragon';
            case enums_1.CreatureType.ELEMENTAL: return 'Elemental';
            case enums_1.CreatureType.FEY: return 'Fey';
            case enums_1.CreatureType.FIEND: return 'Fiend';
            case enums_1.CreatureType.GIANT: return 'Giant';
            default:
            case enums_1.CreatureType.HUMANOID: return 'Humanoid';
            case enums_1.CreatureType.MONSTROSITY: return 'Monstrosity';
            case enums_1.CreatureType.OOZE: return 'Ooze';
            case enums_1.CreatureType.PLANT: return 'Plant';
            case enums_1.CreatureType.UNDEAD: return 'Undead';
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
    };
}
