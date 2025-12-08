import { AbstractType } from "./AbstractType";
export type GameEditionDescription = {
    description: string;
    game_edition: string;
};
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
    gameEditions?: {
        description: string;
        gameEdition: string;
    }[];
    id?: string;
    name?: string;
    plural?: string;
    slug?: string;
}
export declare function createCreatureType(data: CreatureType): CreatureType;
export declare function loadCreatureType<CreatureType>(key: string): AbstractType<CreatureType> | undefined;
export declare function loadAllCreatureTypes<CreatureType>(): AbstractType<CreatureType>[];
//# sourceMappingURL=CreatureType.d.ts.map