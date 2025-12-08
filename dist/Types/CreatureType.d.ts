import { AbstractType } from "./AbstractType";
import { GameEditionDescription } from "./GameEdition";
export type CreatureTypeJsonItem = {
    description: string;
    editions: GameEditionDescription[];
    id: string;
    name: string;
    plural: string;
    slug: string;
};
export interface CreatureType {
    description?: string;
    gameEditions?: GameEditionDescription[];
    id?: string;
    name?: string;
    plural?: string;
    slug?: string;
}
export declare function createCreatureType(data?: CreatureType | string): CreatureType;
export declare function loadCreatureType<CreatureType>(key: string): AbstractType<CreatureType> | undefined;
export declare function loadAllCreatureTypes<CreatureType>(): AbstractType<CreatureType>[];
//# sourceMappingURL=CreatureType.d.ts.map