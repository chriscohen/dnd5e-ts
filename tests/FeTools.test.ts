import { expect, test } from 'vitest';
import {importFrom5eTools} from "../src/FeTools/FeTools";

test('sample', async () => {
    console.log("running sample test");
    const result = await importFrom5eTools('refs/heads/main/data/bestiary/bestiary-aatm.json');
    console.log(result);
    expect(true).toBe(true);
});
