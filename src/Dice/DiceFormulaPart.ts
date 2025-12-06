export type DiceFormulaPartProps = {
    diceFaces?: number;
    numberOfDice?: number;
    modifier?: number;
}

export class DiceFormulaPart {
    diceFaces: number = 6;
    numberOfDice: number = 1;
    modifier: number = 0;

    get f(): number {
        return this.diceFaces;
    }

    get n(): number {
        return this.numberOfDice;
    }
}
