import type {DiceFormulaPart} from "~/classes/Dice/DiceFormulaPart";

export type DiceFormulaProps = {
    parts?: DiceFormulaPart[];
}

export class DiceFormula {
    parts: DiceFormulaPart[] = [];
}
