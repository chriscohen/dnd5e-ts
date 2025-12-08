import {test, expect} from 'vitest';
import {AlignmentGoodEvil, AlignmentLawChaos, createAlignment, createAlignmentFromString} from "../../src";

/**
 * Make sure alignment converts to string properly.
 */
test.each([
    [
        AlignmentLawChaos.LAWFUL,
        AlignmentGoodEvil.GOOD,
        false,
        'Lawful Good'
    ],
    [
        AlignmentLawChaos.NEUTRAL,
        AlignmentGoodEvil.NEUTRAL,
        false,
        'Neutral'
    ],
    [
        AlignmentLawChaos.CHAOTIC,
        AlignmentGoodEvil.EVIL,
        true,
        'Unaligned'
    ]
])('With %d, %d, %b, alignment should be "%s"', (
    lawChaos: AlignmentLawChaos,
    goodEvil: AlignmentGoodEvil,
    unaligned: boolean,
    expected: string
) => {
    const alignment = createAlignment({
        goodEvil: goodEvil,
        isUnaligned: unaligned,
        lawChaos: lawChaos,
    });
    expect(alignment.toString()).toBe(expected);
});

/**
 * Make sure alignment converts from string properly.
 */
test.each([
    ['Lawful Good', AlignmentLawChaos.LAWFUL, AlignmentGoodEvil.GOOD, false],
    ['Neutral', AlignmentLawChaos.NEUTRAL, AlignmentGoodEvil.NEUTRAL, false],
    ['Unaligned', AlignmentLawChaos.NEUTRAL, AlignmentGoodEvil.NEUTRAL, true],
])('With input "%s", alignment should be %d, %d, %b', (
    input: string,
    lawChaos: AlignmentLawChaos,
    goodEvil: AlignmentGoodEvil,
    unaligned: boolean
) => {
    const alignment = createAlignmentFromString(input);
    expect(alignment.lawChaos).toBe(lawChaos);
    expect(alignment.goodEvil).toBe(goodEvil);
    expect(alignment.isUnaligned).toBe(unaligned);
})
