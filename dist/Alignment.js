"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAlignment = createAlignment;
exports.createAlignmentFromString = createAlignmentFromString;
const enums_1 = require("./enums");
function createAlignment(data) {
    const initialGoodEvil = data.goodEvil ?? enums_1.AlignmentGoodEvil.NEUTRAL;
    const initialIsUnaligned = data.isUnaligned ?? false;
    const initialLawChaos = data.lawChaos ?? enums_1.AlignmentLawChaos.NEUTRAL;
    function goodEvilToString() {
        switch (this.goodEvil) {
            case enums_1.AlignmentGoodEvil.EVIL: return 'Evil';
            case enums_1.AlignmentGoodEvil.GOOD: return 'Good';
            default:
            case enums_1.AlignmentGoodEvil.NEUTRAL: return 'Neutral';
        }
    }
    function lawChaosToString() {
        switch (this.lawChaos) {
            case enums_1.AlignmentLawChaos.CHAOTIC: return 'Chaotic';
            case enums_1.AlignmentLawChaos.LAWFUL: return 'Lawful';
            default:
            case enums_1.AlignmentLawChaos.NEUTRAL: return 'Neutral';
        }
    }
    function toString() {
        // Unaligned overrides everything else.
        if (this.isUnaligned)
            return 'Unaligned';
        // Special case for neutral alignment.
        if (this.lawChaos === enums_1.AlignmentLawChaos.NEUTRAL &&
            this.goodEvil === enums_1.AlignmentGoodEvil.NEUTRAL)
            return 'Neutral';
        return `${this.lawChaosToString()} ${this.goodEvilToString()}`;
    }
    return {
        goodEvilToString,
        lawChaosToString,
        toString,
        goodEvil: initialGoodEvil,
        isUnaligned: initialIsUnaligned,
        lawChaos: initialLawChaos
    };
}
function createAlignmentFromString(input) {
    switch (input.toLowerCase()) {
        case 'lg':
        case 'lawful good': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.LAWFUL,
            goodEvil: enums_1.AlignmentGoodEvil.GOOD
        });
        case 'ln':
        case 'lawful neutral': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.LAWFUL,
            goodEvil: enums_1.AlignmentGoodEvil.NEUTRAL
        });
        case 'le':
        case 'lawful evil': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.LAWFUL,
            goodEvil: enums_1.AlignmentGoodEvil.EVIL
        });
        case 'ng':
        case 'neutral good': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.NEUTRAL,
            goodEvil: enums_1.AlignmentGoodEvil.GOOD
        });
        case 'n':
        case 'nn':
        case 'neutral':
        case 'true neutral': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.NEUTRAL,
            goodEvil: enums_1.AlignmentGoodEvil.NEUTRAL
        });
        case 'ne':
        case 'neutral evil': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.NEUTRAL,
            goodEvil: enums_1.AlignmentGoodEvil.EVIL
        });
        case 'cg':
        case 'chaotic good': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.CHAOTIC,
            goodEvil: enums_1.AlignmentGoodEvil.GOOD
        });
        case 'cn':
        case 'chaotic neutral': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.CHAOTIC,
            goodEvil: enums_1.AlignmentGoodEvil.NEUTRAL
        });
        case 'ce':
        case 'chaotic evil': return createAlignment({
            lawChaos: enums_1.AlignmentLawChaos.CHAOTIC,
            goodEvil: enums_1.AlignmentGoodEvil.EVIL
        });
        case 'unaligned': return createAlignment({ isUnaligned: true });
    }
    throw new Error(`Invalid alignment: ${input}`);
}
