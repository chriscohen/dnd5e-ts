"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArmorClassSource = createArmorClassSource;
function createArmorClassSource(data = {}) {
    const _modifier = data.modifier ?? 0;
    const _source = data.source;
    return {
        modifier: _modifier,
        source: _source
    };
}
