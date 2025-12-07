import { expect, test } from 'vitest';
import {makeSlug} from "../src";

test.each([
    ["Aurora's Whole Realms Catalogue", "auroras-whole-realms-catalogue"],
    ["Elf's Deep", "elfs-deep"],
    ["Arms & Armor", "arms-armor"],
])('Get slug for "%s"', (input: string, expected: string) => {
    expect(makeSlug(input)).toBe(expected);
});
