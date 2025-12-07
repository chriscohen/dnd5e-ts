"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var constants_1 = require("~/constants");
var Media_1 = require("~/Media/Media");
vitest_1.test.each([
    ['example.webp', 'exampleDirectoryName', constants_1.CDN_URL + 'exampleDirectoryName/example.webp'],
    ['example-no-dir.jpg', undefined, constants_1.CDN_URL + 'example-no-dir.jpg'],
    ['example-empty-dir.png', '', constants_1.CDN_URL + 'example-empty-dir.png']
])('Test that filename "%s" and directory "%s" yields the correct URL', function (filename, directory, expected) {
    (0, vitest_1.expect)((0, Media_1.createMediaFromFilenameAndDirectory)(filename, directory).url()).toBe(expected);
});
