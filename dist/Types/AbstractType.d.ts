export declare abstract class AbstractType<T> {
    aliases?: string[];
    name?: string;
    fullName?: string;
    static cache: any;
    static filename: string;
    static isLoaded: boolean;
    static get<T>(key: string): AbstractType<T> | undefined;
    static getAll<T>(): AbstractType<T>[];
}
//# sourceMappingURL=AbstractType.d.ts.map