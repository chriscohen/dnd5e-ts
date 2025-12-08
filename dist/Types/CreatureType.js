"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCreatureType = createCreatureType;
exports.loadCreatureType = loadCreatureType;
exports.loadAllCreatureTypes = loadAllCreatureTypes;
const utils_1 = require("../utils");
function createCreatureType(data) {
    const _description = data.description;
    const _gameEditions = data.gameEditions ?? [];
    const _id = data.id;
    const _name = data.name;
    const _plural = data.plural;
    const _slug = data.slug;
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
            item.editions.forEach(edition => output.gameEditions?.push({
                description: edition.description,
                gameEdition: edition.game_edition
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
