"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlug = void 0;
var getSlug = function (str) {
    return str.toLowerCase().replace(/['&]/, '').replace(/[^a-z0-9]+/g, '-');
};
exports.getSlug = getSlug;
