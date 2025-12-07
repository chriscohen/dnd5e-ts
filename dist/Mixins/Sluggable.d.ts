export interface Sluggable<T> {
    slug(): string;
}
export declare function getSluggableMethods<T extends Record<string, any>>(): {
    slug(this: T): any;
};
//# sourceMappingURL=Sluggable.d.ts.map