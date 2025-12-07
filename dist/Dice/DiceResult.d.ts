export type DiceResultProps = {
    total?: number;
    rolls?: number[];
    modifier?: number;
};
export declare class DiceResult {
    total: number;
    rolls: number[];
    modifier: number;
    constructor(props?: DiceResultProps);
    static create(props: DiceResultProps): DiceResult;
}
//# sourceMappingURL=DiceResult.d.ts.map