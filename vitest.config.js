"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("vitest/config");
var path = require("path");
exports.default = (0, config_1.defineConfig)({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    test: {
        include: [
            'tests/**/*.test.ts',
            'src/FeTools/**/*.test.ts'
        ]
    }
});
