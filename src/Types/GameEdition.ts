import {getJsonFromDataFile} from "../utils";
import {AbstractType} from "./AbstractType";

export type GameEditionDescription = {
    description: string;
    gameEdition: string;
}

export type GameEditionJsonItem = {
    fullName: string;
    name: string;
    number: string;
    aliases?: string[];
    start: number
    end?: number
}

export interface GameEdition {
    aliases?: string[];
    end?: number;
    fullName?: string;
    name?: string;
    numeric?: string;
    start?: number;
}

export function createGameEdition(data: GameEdition): GameEdition {
    const _aliases: string[] | undefined = data.aliases;
    const _end: number | undefined = data.end;
    const _fullName: string | undefined = data.fullName;
    const _name: string | undefined = data.name;
    const _numeric: string | undefined = data.numeric;
    const _start: number | undefined = data.start;

    return {
        aliases: _aliases,
        end: _end,
        fullName: _fullName,
        name: _name,
        numeric: _numeric,
        start: _start
    }
}

export function loadGameEdition<GameEdition>(key: string): AbstractType<GameEdition> | undefined {
    key = key.toLowerCase();
    const items = loadAllGameEditions<GameEdition>();

    return items.find((item: AbstractType<GameEdition>) => {
        // Does the name or the fullName match?
        if (item.name?.toLowerCase() === key || item.fullName?.toLowerCase() === key) return item;

        // Do we have aliases and do they match?
        if (item.aliases) item.aliases.forEach((alias: string) => {
            if (alias.toLowerCase() === key) return item;
        })

        return undefined;
    });
}

export function loadAllGameEditions<GameEdition>(): AbstractType<GameEdition>[] {
    try {
        const json = getJsonFromDataFile('types/gameEditions.json');
        const result: AbstractType<GameEdition>[] = [];

        json.forEach((item: GameEditionJsonItem) => {
            const output = createGameEdition({
                aliases: item.aliases,
                end: item.end,
                fullName: item.fullName,
                name: item.name,
                numeric: item.number,
                start: item.start,
            });

            result.push(output);
        });

        return result;
    } catch (error: any) {
        console.error('There was an error loading the game editions file.', error.message);
        return [];
    }
}

export function createGameEditionFromText(input: string): GameEdition | undefined {
    return loadGameEdition<GameEdition>(input.toLowerCase()) ?? undefined;
}
