"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSluggableMethods = getSluggableMethods;
function getSluggableMethods() {
    return {
        slug: function () {
            return this._slug.toLowerCase().replace(/['&]/, '').replace(/[^a-z0-9]+/g, '-');
        }
    };
}
