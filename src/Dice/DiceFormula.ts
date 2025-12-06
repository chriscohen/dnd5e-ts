import type {DiceFormulaPart} from "~/Dice/DiceFormulaPart";

export type DiceFormulaProps = {
    parts?: DiceFormulaPart[];
}

export class DiceFormula {
    parts: DiceFormulaPart[] = [];
}
