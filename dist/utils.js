"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSlug = void 0;
const makeSlug = (str) => str.toLowerCase().replace(/['&]/, '').replace(/[^a-z0-9]+/g, '-');
exports.makeSlug = makeSlug;
