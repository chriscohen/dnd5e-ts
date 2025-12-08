"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCreatureType = createCreatureType;
exports.loadCreatureType = loadCreatureType;
exports.loadAllCreatureTypes = loadAllCreatureTypes;
const utils_1 = require("../utils");
function createCreatureType(data = {}) {
    let _description;
    let _gameEditions = [];
    let _id;
    let _name;
    let _plural;
    let _slug;
    if (typeof data === 'string') {
    }
    else {
        _description = data.description;
        _gameEditions = data.gameEditions;
        _id = data.id;
        _name = data.name;
        _plural = data.plural;
        _slug = data.slug;
    }
    return {
        description: _description,
        gameEditions: _gameEditions,
        id: _id,
        name: _name,
        plural: _plural,
        slug: _slug
    };
}
function loadCreatureType(key) {
    key = key.toLowerCase();
    const items = loadAllCreatureTypes();
    console.log(items);
    return items.find((item) => {
        // Does the name match?
        if (item.name?.toLowerCase() === key)
            return item;
        return undefined;
    });
}
function loadAllCreatureTypes() {
    try {
        const json = (0, utils_1.getJsonFromDataFile)('types/creatureTypes.json');
        const result = [];
        json.forEach((item) => {
            console.log('item', item);
            const output = createCreatureType({
                description: item.description,
                gameEditions: [],
                id: item.id,
                name: item.name,
                plural: item.plural,
                slug: item.slug,
            });
            item.editions.forEach((edition) => output.gameEditions?.push({
                description: edition.description,
                gameEdition: edition.gameEdition
            }));
            result.push(output);
        });
        return result;
    }
    catch (error) {
        console.error('There was an error loading the creature types file.', error.message);
        return [];
    }
}
