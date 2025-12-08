import {AbstractType} from "./AbstractType";
import {getJsonFromDataFile} from "../utils";
import {GameEditionDescription} from "./GameEdition";

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
    gameEditions?: GameEditionDescription[];
    id?: string;
    name?: string;
    plural?: string;
    slug?: string;
}

export function createCreatureType(data: CreatureType | string = {}): CreatureType {
    let _description: string | undefined;
    let _gameEditions: GameEditionDescription[] | undefined = [];
    let _id: string | undefined;
    let _name: string | undefined;
    let _plural: string | undefined;
    let _slug: string | undefined;

    if (typeof data === 'string') {

    } else {
        _description = data.description;
        _gameEditions = data.gameEditions;
        _id = data.id;
        _name = data.name;
        _plural = data.plural;
        _slug = data.slug;
    }

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

            item.editions.forEach((edition: GameEditionDescription) => output.gameEditions?.push({
                description: edition.description,
                gameEdition: edition.gameEdition
            }));

            result.push(output);
        });

        return result;
    } catch (error: any) {
        console.error('There was an error loading the creature types file.', error.message);
        return [];
    }
}
