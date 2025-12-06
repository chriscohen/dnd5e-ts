export class Slugifier {
    static slugify(str: string): string {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
}
