import {DiceFormula} from "../Dice/DiceFormula";

export interface ActorHitPoints {
    average?: number;
    current?: number;
    formula?: DiceFormula;
}

export function createActorHitPoints(data: ActorHitPoints = {}): ActorHitPoints {
    const average = data.average ?? 0;
    const current = data.current ?? 0;
    const formula = data.formula ?? undefined;

    return {
        ...data,
        average,
        current,
        formula
    }
}
