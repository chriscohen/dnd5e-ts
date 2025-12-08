import {test, expect} from 'vitest';
import {createActorType, createAlignmentFromString, CreatureSize, CreatureType, loadCreatureType} from "../src";

/**
 * Make sure size converts properly to a string.
 */
test.each([
    [{}, 'Medium'],
    [{size: CreatureSize.SMALL}, 'Small'],
])('getSize() for %s should be "%s"', (createProps: any, expected: string) => {
    const actorType = createActorType(createProps);
    expect(actorType.getSize()).toBe(expected);
});

/**
 * Make sure type converts properly to a string.
 */
test.each([
    [{}, undefined],
    [{type: loadCreatureType('dragon')}, 'dragon'],
])('getType() for %s should be "%s', (createProps: any, expected: string | undefined) => {
    const actorType = createActorType(createProps);
    expect(actorType.getType()?.name).toBe(expected);
});

/**
 * Make sure alignment converts properly to a string.
 */
test.each ([
    [{}, undefined],
    [{alignment: [createAlignmentFromString('lg')]}, 'Lawful Good'],
])('getAlignment() for %s should be "%s"', (createProps: any, expected: string | undefined) => {
    const actorType = createActorType(createProps);
    expect(actorType.getAlignment()).toBe(expected);
});
