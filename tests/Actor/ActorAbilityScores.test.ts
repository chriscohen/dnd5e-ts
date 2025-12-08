import { expect, test } from 'vitest';
import {createActorAbilityScores} from "../../src/Actor/ActorAbilityScores";
import {DEFAULT_ABILITY_SCORE} from "../../src/constants";

test("When I don't pass parameters, all values are default (10).", () => {
    const result = createActorAbilityScores();
    expect(result.str.base).toBe(DEFAULT_ABILITY_SCORE);
});
