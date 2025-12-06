import { expect, test } from 'vitest';
import {DiceFormulaPart} from "~/Dice/DiceFormulaPart";

test('Before DiceFormulaPart.roll(), result is empty', () => {
    const notRolled = new DiceFormulaPart();

    const rolled = new DiceFormulaPart();
    rolled.roll;

    expect(notRolled.hasRolled).toBe(false);
    expect(rolled.hasRolled).toBe(true);
});
