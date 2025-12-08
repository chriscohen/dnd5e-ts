import {test, expect} from "vitest";
import {GameEdition, loadGameEdition} from "../../src";

test.each([
    ['5th Edition', true]
])('Loading game edition "%s" should be %b', (edition: string, expected: boolean) => {
    const result = loadGameEdition<GameEdition>
    expect(result !== undefined).toBe(expected);
});
