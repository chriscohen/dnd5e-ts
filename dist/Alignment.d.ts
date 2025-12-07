import { AlignmentGoodEvil, AlignmentLawChaos } from "./enums";
export interface Alignment {
    goodEvilToString: () => string;
    lawChaosToString: () => string;
    toString: () => string;
    goodEvil?: AlignmentGoodEvil;
    isUnaligned?: boolean;
    lawChaos?: AlignmentLawChaos;
}
export type AlignmentProps = Omit<Alignment, 'goodEvilToString' | 'lawChaosToString' | 'toString'>;
export declare function createAlignment(data: AlignmentProps): {
    goodEvilToString: (this: Alignment) => string;
    lawChaosToString: (this: Alignment) => string;
    toString: (this: Alignment) => string;
    goodEvil: AlignmentGoodEvil;
    isUnaligned: boolean;
    lawChaos: AlignmentLawChaos;
};
export declare function createAlignmentFromString(input: string): Alignment;
//# sourceMappingURL=Alignment.d.ts.map