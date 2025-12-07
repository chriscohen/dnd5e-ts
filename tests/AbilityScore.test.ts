import {expect, test} from 'vitest';
import {AbilityType, createAbilityScoreFromNumber} from "../src";

test.each([
    [15, true, '15 (+2)'],
    [9, true, '9 (-1)'],
    [10, false, '10 (0)'],
    [10, true, '10 (+0)']
])('%d should be formatted as %s', (score: number, showPlusForZero: boolean, expected: string) => {
    const abilityScore = createAbilityScoreFromNumber(score, AbilityType.STR);
    expect(abilityScore.format(showPlusForZero)).toBe(expected);
});
