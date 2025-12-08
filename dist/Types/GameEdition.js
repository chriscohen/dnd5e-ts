"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGameEdition = createGameEdition;
exports.loadGameEdition = loadGameEdition;
exports.loadAllGameEditions = loadAllGameEditions;
exports.createGameEditionFromText = createGameEditionFromText;
const utils_1 = require("../utils");
function createGameEdition(data) {
    const _aliases = data.aliases;
    const _end = data.end;
    const _fullName = data.fullName;
    const _name = data.name;
    const _numeric = data.numeric;
    const _start = data.start;
    return {
        aliases: _aliases,
        end: _end,
        fullName: _fullName,
        name: _name,
        numeric: _numeric,
        start: _start
    };
}
function loadGameEdition(key) {
    key = key.toLowerCase();
    const items = loadAllGameEditions();
    return items.find((item) => {
        // Does the name or the fullName match?
        if (item.name?.toLowerCase() === key || item.fullName?.toLowerCase() === key)
            return item;
        // Do we have aliases and do they match?
        if (item.aliases)
            item.aliases.forEach((alias) => {
                if (alias.toLowerCase() === key)
                    return item;
            });
        return undefined;
    });
}
function loadAllGameEditions() {
    try {
        const json = (0, utils_1.getJsonFromDataFile)('types/gameEditions.json');
        const result = [];
        json.forEach((item) => {
            const output = createGameEdition({
                aliases: item.aliases,
                end: item.end,
                fullName: item.fullName,
                name: item.name,
                numeric: item.number,
                start: item.start,
            });
            result.push(output);
        });
        return result;
    }
    catch (error) {
        console.error('There was an error loading the game editions file.', error.message);
        return [];
    }
}
function createGameEditionFromText(input) {
    return loadGameEdition(input.toLowerCase()) ?? undefined;
}
