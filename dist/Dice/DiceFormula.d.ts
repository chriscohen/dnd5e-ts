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
export type DiceFormulaProps = Omit<DiceFormula, 'hasRolled' | 'max' | 'min' | 'roll'>;
export declare function createDiceFormula(data?: DiceFormulaProps): DiceFormula;
export declare function parseDiceFormula(formula: string): DiceFormula;
//# sourceMappingURL=DiceFormula.d.ts.map