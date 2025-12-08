import { AbstractType } from "./AbstractType";
export type GameEditionDescription = {
    description: string;
    gameEdition: string;
};
export type GameEditionJsonItem = {
    fullName: string;
    name: string;
    number: string;
    aliases?: string[];
    start: number;
    end?: number;
};
export interface GameEdition {
    aliases?: string[];
    end?: number;
    fullName?: string;
    name?: string;
    numeric?: string;
    start?: number;
}
export declare function createGameEdition(data: GameEdition): GameEdition;
export declare function loadGameEdition<GameEdition>(key: string): AbstractType<GameEdition> | undefined;
export declare function loadAllGameEditions<GameEdition>(): AbstractType<GameEdition>[];
export declare function createGameEditionFromText(input: string): GameEdition | undefined;
//# sourceMappingURL=GameEdition.d.ts.map