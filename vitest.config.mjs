import { defineConfig } from 'vitest/config';
import {fileURLToPath} from "node:url";

export default defineConfig({
    test: {
        include: ['tests/**/*.test.ts'],
        exclude: ['dist/**', 'node_modules/**']
    },
    resolve: {
        alias: {
            // 1. "import.meta.url" finds the location of THIS config file.
            // 2. "new URL('./src', ...)" finds the src folder next to it.
            // 3. "fileURLToPath" turns it into a valid Windows path (L:\Projects\...)
            '~': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
