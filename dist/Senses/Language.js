"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLanguage = createLanguage;
exports.loadLanguage = loadLanguage;
exports.loadLanguages = loadLanguages;
const utils_1 = require("../utils");
function createLanguage(data) {
    const _isExotic = data.isExotic ?? false;
    const _name = data.name;
    const _scriptName = data.scriptName;
    const _slug = data.slug;
    function hasScript() {
        return _scriptName !== undefined;
    }
    return {
        hasScript,
        isExotic: _isExotic,
        name: _name,
        scriptName: _scriptName,
        slug: _slug
    };
}
/**
 * @throws Error
 */
function loadLanguage(slug) {
    return (0, utils_1.getJsonFromDataFile)('types/languages.json').find((language) => language.slug === slug.toLowerCase());
}
/**
 * @throws Error
 */
function loadLanguages() {
    return (0, utils_1.getJsonFromDataFile)('types/languages.json');
}
