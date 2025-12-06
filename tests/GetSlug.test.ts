import { expect, test } from 'vitest';
import {getSlug} from "~/utils";

test.each([
    ["Aurora's Whole Realms Catalogue", "auroras-whole-realms-catalogue"],
    ["Elf's Deep", "elfs-deep"],
    ["Arms & Armor", "arms-armor"],
])('Get slug for "%s"', (input: string, expected: string) => {
    expect(getSlug(input)).toBe(expected);
});
