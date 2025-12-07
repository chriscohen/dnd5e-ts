import { GameEditionEnum as GameEditionEnum } from "~/enums";
export interface GameEdition {
    fullName?: string;
    name?: string;
    numeric?: string;
}
export declare function createGameEdition(data?: GameEdition): GameEdition;
export declare function createGameEditionFromText(input: string): GameEdition;
/**
 * Returns a GameEdition object based on the provided enumeration.
 */
export declare function createGameEditionFromEnum(input: GameEditionEnum): GameEdition;
//# sourceMappingURL=GameEdition.d.ts.map