import { DiceResult } from "./DiceResult";
export interface DiceFormulaPart {
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult;
    toString: () => string;
    diceFaces?: number;
    numberOfDice?: number;
    lastResult?: DiceResult;
}
export type DiceFormulaPartProps = Omit<DiceFormulaPart, 'hasRolled' | 'max' | 'min' | 'roll'>;
export declare function createDiceFormulaPart(data?: DiceFormulaPartProps): DiceFormulaPart;
export declare function parseDiceFormulaPart(formula: string): DiceFormulaPart;
//# sourceMappingURL=DiceFormulaPart.d.ts.map