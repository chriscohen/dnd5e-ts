export interface Fileable<T> {
    fromFileSync(path: string): T;
    toFileSync(path: string, data: T): boolean;
    fromFileAsync(path: string): Promise<T>;
    toFileAsync(path: string, data: T): Promise<boolean>;
}
export declare function getFileableMethods<T>(): {
    fromFileSync(this: T, path: string): any;
    toFileSync(this: T, path: string, data: any): boolean;
    fromFileAsync(this: T, path: string): Promise<T>;
    toFileAsync(this: T, path: string, data: any): Promise<boolean>;
};
//# sourceMappingURL=Fileable.d.ts.map