"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var utils_1 = require("~/utils");
vitest_1.test.each([
    ["Aurora's Whole Realms Catalogue", "auroras-whole-realms-catalogue"],
    ["Elf's Deep", "elfs-deep"],
    ["Arms & Armor", "arms-armor"],
])('Get slug for "%s"', function (input, expected) {
    (0, vitest_1.expect)((0, utils_1.getSlug)(input)).toBe(expected);
});
