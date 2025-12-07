import {test, expect} from 'vitest';
import {createActorType, CreatureSize, CreatureType} from "../src";

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
    [{}, 'Humanoid'],
    [{type: CreatureType.DRAGON}, 'Dragon'],
])('getType() for %s should be "%s', (createProps: any, expected: string) => {
    const actorType = createActorType(createProps);
    expect(actorType.getType()).toBe(expected);
});
