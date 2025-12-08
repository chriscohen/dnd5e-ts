import * as fs from "node:fs";

export const makeSlug = (str: string): string =>
    str.toLowerCase().replace(/['&]/, '').replace(/[^a-z0-9]+/g, '-');

export function getJsonFromDataFile(filename: string): any {
    console.log('Reading file: ./data/' + filename + '');
    const contents = fs.readFileSync("./data/" + filename, 'utf8');
    console.log('contents of file: ', contents.toString());
    return JSON.parse(contents.toString());
}
