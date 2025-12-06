import { expect, test } from 'vitest';
import {CDN_URL} from "~/constants";
import {createMediaFromFilenameAndDirectory} from "~/Media/Media";

test.each([
    ['example.webp', 'exampleDirectoryName', CDN_URL + 'exampleDirectoryName/example.webp'],
    ['example-no-dir.jpg', undefined, CDN_URL + 'example-no-dir.jpg'],
    ['example-empty-dir.png', '', CDN_URL + 'example-empty-dir.png']
])('Test that filename "%s" and directory "%s" yields the correct URL', (
    filename: string,
    directory: string | undefined,
    expected: string
) => {
    expect(createMediaFromFilenameAndDirectory(filename, directory).url()).toBe(expected);
});
