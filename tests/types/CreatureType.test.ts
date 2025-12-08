import {test, expect} from "vitest";
import {CreatureType} from "../../src/Types/CreatureType";
import {loadCreatureType} from "../../src/Types/CreatureType";

test.each([
    ['Aberration', true]
])('Loading creature type "%s" should be %b', (input: string, expected: boolean) => {
    const result = loadCreatureType<CreatureType>(input);
    console.log(result);
    expect(result !== undefined).toBe(expected);
});
