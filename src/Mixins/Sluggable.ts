export interface Sluggable<T> {
    slug(): string;
}

export function getSluggableMethods<T extends Record<string, any>>() {
    return {
        slug(this: T) {
            return this._slug.toLowerCase().replace(/['&]/, '').replace(/[^a-z0-9]+/g, '-');
        }
    }
}
