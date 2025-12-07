import { DiceFormulaPart } from "~/Dice/DiceFormulaPart";
import { DiceResult } from "~/Dice/DiceResult";
export interface DiceFormula {
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult[];
    parts?: DiceFormulaPart[];
    lastResult: DiceResult[];
}
export declare function createDiceFormula(data: DiceFormula): DiceFormula;
export declare function parseDiceFormula(formula: string): DiceFormulaPart[];
//# sourceMappingURL=DiceFormula.d.ts.map