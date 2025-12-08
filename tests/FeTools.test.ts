import { expect, test } from 'vitest';
import {importFrom5eTools} from "../src/FeTools/FeTools";

test('sample', async () => {
    const result = await importFrom5eTools('refs/heads/main/data/bestiary/bestiary-aatm.json');
    expect(true).toBe(true);
});
