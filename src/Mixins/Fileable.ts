import * as fs from "node:fs";

export interface Fileable<T> {
    fromFileSync(path: string): T;
    toFileSync(path: string, data: T): boolean;

    fromFileAsync(path: string): Promise<T>;
    toFileAsync(path: string, data: T): Promise<boolean>;
}

export function getFileableMethods<T>() {
    return {
        fromFileSync(this: T, path: string): any {
            try {
                return fs.readFileSync(path, 'utf8');
            } catch (error: any) {
                console.error(`There was an error reading the file at ${path}`, error.message);
                return false;
            }
        },
        toFileSync(this: T, path: string, data: any): boolean {
            return false;
        },
        fromFileAsync(this: T, path: string): Promise<T> {
            return new Promise((resolve, reject) => {
            });
        },
        toFileAsync(this: T, path: string, data: any): Promise<boolean> {
            return new Promise((resolve, reject) => {
            });
        }
    }
}
