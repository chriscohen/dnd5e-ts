import {getJsonFromDataFile} from "../utils";

export abstract class AbstractType<T> {
    aliases?: string[];
    name?: string;
    fullName?: string;

    static cache: any;
    static filename: string = '';
    static isLoaded: boolean = false;

    static get<T>(key: string): AbstractType<T> | undefined {
        throw new Error('Not implemented.');
    }

    static getAll<T>(): AbstractType<T>[] {
        throw new Error('Not implemented.');
    }
}
