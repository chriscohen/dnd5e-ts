export interface DiceResult {
    total?: number;
    rolls?: number[];
    modifier?: number;
}

export function createDiceResult(data: DiceResult = {}): DiceResult {
    const total: number = data.total ?? 0;
    const rolls: number[] = data.rolls ?? [];
    const modifier: number = data.modifier ?? 0;

    return {
        ...data,
        total,
        rolls,
        modifier
    }
}
