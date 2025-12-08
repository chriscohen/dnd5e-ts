import {AbstractType} from "./AbstractType";
import {getJsonFromDataFile} from "../utils";

export type GameEditionDescription = {
    description: string;
    game_edition: string;
}

export type CreatureTypeJsonItem = {
    description: string;
    editions: GameEditionDescription[];
    id: string;
    name: string;
    plural: string;
    slug: string;
}

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

export function createCreatureType(data: CreatureType): CreatureType {
    const _description: string | undefined = data.description;
    const _gameEditions = data.gameEditions ?? [];
    const _id: string | undefined = data.id;
    const _name: string | undefined = data.name;
    const _plural: string | undefined = data.plural;
    const _slug: string | undefined = data.slug;

    return {
        description: _description,
        gameEditions: _gameEditions,
        id: _id,
        name: _name,
        plural: _plural,
        slug: _slug
    }
}


export function loadCreatureType<CreatureType>(key: string): AbstractType<CreatureType> | undefined {
    key = key.toLowerCase();
    const items = loadAllCreatureTypes<CreatureType>();
    console.log(items);

    return items.find((item: AbstractType<CreatureType>) => {
        // Does the name match?
        if (item.name?.toLowerCase() === key) return item;

        return undefined;
    });
}

export function  loadAllCreatureTypes<CreatureType>(): AbstractType<CreatureType>[] {
    try {
        const json = getJsonFromDataFile('types/creatureTypes.json');
        const result: AbstractType<CreatureType>[] = [];

        json.forEach((item: CreatureTypeJsonItem) => {
            console.log('item', item);
            const output = createCreatureType({
                description: item.description,
                gameEditions: [],
                id: item.id,
                name: item.name,
                plural: item.plural,
                slug: item.slug,
            });

            item.editions.forEach(edition => output.gameEditions?.push({
                description: edition.description,
                gameEdition: edition.game_edition
            }));

            result.push(output);
        });

        return result;
    } catch (error: any) {
        console.error('There was an error loading the creature types file.', error.message);
        return [];
    }
}
