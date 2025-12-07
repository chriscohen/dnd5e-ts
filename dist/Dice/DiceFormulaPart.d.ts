import { DiceResult } from "./DiceResult";
export interface DiceFormulaPart {
    hasRolled: () => boolean;
    max: () => number;
    min: () => number;
    roll: () => DiceResult;
    toString: (includeModifier?: boolean) => string;
    diceFaces?: number;
    numberOfDice?: number;
    lastResult?: DiceResult;
    modifier?: number;
}
export type DiceFormulaPartProps = Omit<DiceFormulaPart, 'hasRolled' | 'max' | 'min' | 'roll'>;
export declare function createDiceFormulaPart(data?: DiceFormulaPartProps): DiceFormulaPart;
export declare function parseDiceFormulaPart(formula: string): DiceFormulaPart;
//# sourceMappingURL=DiceFormulaPart.d.ts.map