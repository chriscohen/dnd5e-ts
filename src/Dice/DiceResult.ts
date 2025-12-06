export type DiceResultProps = {
    total?: number;
    rolls?: number[];
    modifier?: number;
}

export class DiceResult {
    total: number = 0;
    rolls: number[] = [];
    modifier: number = 0;

    constructor(props: DiceResultProps = {}) {
        this.total = props.total ?? 0;
        this.rolls = props.rolls ?? [];
        this.modifier = props.modifier ?? 0;
    }

    static create(props: DiceResultProps): DiceResult {
        return new DiceResult(props);
    }
}
