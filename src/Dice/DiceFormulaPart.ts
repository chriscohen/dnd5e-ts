export type DiceFormulaPartProps = {
    numberOfDice?: number;
    diceFaces?: number;
}

export class DiceFormulaPart {
    numberOfDice: number = 1;
    diceFaces: number = 6;

    get f(): number {
        return this.diceFaces;
    }

    get n(): number {
        return this.numberOfDice;
    }
}
