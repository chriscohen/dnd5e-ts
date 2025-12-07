import {AlignmentGoodEvil, AlignmentLawChaos} from "./enums";

export type AlignmentProps = {
    lawChaos?: AlignmentLawChaos;
    goodEvil?: AlignmentGoodEvil;
}

export class Alignment {
    lawChaos: AlignmentLawChaos;
    goodEvil: AlignmentGoodEvil;

    constructor(props: AlignmentProps) {
        this.lawChaos = props.lawChaos ?? AlignmentLawChaos.NEUTRAL;
        this.goodEvil = props.goodEvil ?? AlignmentGoodEvil.NEUTRAL;
    }
}
