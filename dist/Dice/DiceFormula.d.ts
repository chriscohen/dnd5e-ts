import { DiceFormulaPart } from "./DiceFormulaPart";
import { DiceResult } from "./DiceResult";
export interface DiceFormula {
    hasModifier: () => boolean;
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult[];
    toString: () => string;
    modifier?: number;
    parts?: DiceFormulaPart[];
    lastResult: DiceResult[];
}
export type DiceFormulaProps = Omit<DiceFormula, 'hasModifier' | 'hasRolled' | 'max' | 'min' | 'roll'>;
export declare function createDiceFormula(data?: DiceFormulaProps): DiceFormula;
export declare function parseDiceFormula(formula: string): DiceFormula;
//# sourceMappingURL=DiceFormula.d.ts.map