import {test, expect} from "vitest";
import {createArmorClass, createArmorClassSource} from "../../src";

test('Empty ArmorClass should be 10', () => {
    const ac = createArmorClass();
    expect(ac.total()).toBe(10);
});

test('Natural armor should be 15', () => {
    const ac = createArmorClass({base: 15, isNaturalArmor: true});
    expect(ac.total()).toBe(15);
});

test('Armor with sources should be 12', () => {
    const ac = createArmorClass();
    ac.addSource(createArmorClassSource({
        modifier: 2,
        source: 'test'
    }));
    expect(ac.total()).toBe(12);
});
