"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourcebookEdition = createSourcebookEdition;
function createSourcebookEdition(data = {
    formats: [],
    isPrimary: false
}) {
    const instance = {};
    return {
        ...data,
        ...instance
    };
}
