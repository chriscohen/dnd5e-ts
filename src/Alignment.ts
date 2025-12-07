import {AlignmentGoodEvil, AlignmentLawChaos} from "./enums";

export interface Alignment {
    goodEvilToString: () => string;
    lawChaosToString: () => string;
    toString: () => string;

    goodEvil?: AlignmentGoodEvil;
    isUnaligned?: boolean;
    lawChaos?: AlignmentLawChaos;
}

export type AlignmentProps = Omit<Alignment, 'goodEvilToString' | 'lawChaosToString' | 'toString'>;

export function createAlignment(data: AlignmentProps) {
    const initialGoodEvil: AlignmentGoodEvil = data.goodEvil ?? AlignmentGoodEvil.NEUTRAL;
    const initialIsUnaligned: boolean = data.isUnaligned ?? false;
    const initialLawChaos: AlignmentLawChaos = data.lawChaos ?? AlignmentLawChaos.NEUTRAL;

    function goodEvilToString(this: Alignment): string {
        switch (this.goodEvil) {
            case AlignmentGoodEvil.EVIL: return 'Evil';
            case AlignmentGoodEvil.GOOD: return 'Good';
            default:
            case AlignmentGoodEvil.NEUTRAL: return 'Neutral';
        }
    }

    function lawChaosToString(this: Alignment): string {
        switch (this.lawChaos) {
            case AlignmentLawChaos.CHAOTIC: return 'Chaotic';
            case AlignmentLawChaos.LAWFUL: return 'Lawful';
            default:
            case AlignmentLawChaos.NEUTRAL: return 'Neutral';
        }
    }

    function toString(this: Alignment) {
        // Unaligned overrides everything else.
        if (this.isUnaligned) return 'Unaligned';

        // Special case for neutral alignment.
        if (
            this.lawChaos === AlignmentLawChaos.NEUTRAL &&
            this.goodEvil === AlignmentGoodEvil.NEUTRAL
        ) return 'Neutral';

        return `${this.lawChaosToString()} ${this.goodEvilToString()}`;
    }

    return {
        goodEvilToString,
        lawChaosToString,
        toString,

        goodEvil: initialGoodEvil,
        isUnaligned: initialIsUnaligned,
        lawChaos: initialLawChaos
    }
}

export function createAlignmentFromString(input: string): Alignment {
    switch (input.toLowerCase()) {
        case 'lg':
        case 'lawful good': return createAlignment({
            lawChaos: AlignmentLawChaos.LAWFUL,
            goodEvil: AlignmentGoodEvil.GOOD
        });
        case 'ln':
        case 'lawful neutral': return createAlignment({
            lawChaos: AlignmentLawChaos.LAWFUL,
            goodEvil: AlignmentGoodEvil.NEUTRAL
        });
        case 'le':
        case 'lawful evil': return createAlignment({
            lawChaos: AlignmentLawChaos.LAWFUL,
            goodEvil: AlignmentGoodEvil.EVIL
        });
        case 'ng':
        case 'neutral good': return createAlignment({
            lawChaos: AlignmentLawChaos.NEUTRAL,
            goodEvil: AlignmentGoodEvil.GOOD
        });
        case 'n':
        case 'nn':
        case 'neutral':
        case 'true neutral': return createAlignment({
            lawChaos: AlignmentLawChaos.NEUTRAL,
            goodEvil: AlignmentGoodEvil.NEUTRAL
        });
        case 'ne':
        case 'neutral evil': return createAlignment({
            lawChaos: AlignmentLawChaos.NEUTRAL,
            goodEvil: AlignmentGoodEvil.EVIL
        });
        case 'cg':
        case 'chaotic good': return createAlignment({
            lawChaos: AlignmentLawChaos.CHAOTIC,
            goodEvil: AlignmentGoodEvil.GOOD
        });
        case 'cn':
        case 'chaotic neutral': return createAlignment({
            lawChaos: AlignmentLawChaos.CHAOTIC,
            goodEvil: AlignmentGoodEvil.NEUTRAL
        });
        case 'ce':
        case 'chaotic evil': return createAlignment({
            lawChaos: AlignmentLawChaos.CHAOTIC,
            goodEvil: AlignmentGoodEvil.EVIL
        });
        case 'unaligned': return createAlignment({isUnaligned: true});
    }

    throw new Error(`Invalid alignment: ${input}`);
}
