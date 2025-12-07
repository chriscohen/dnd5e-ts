"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourcebook = createSourcebook;
const Media_1 = require("../Media/Media");
const ImportExport_1 = require("../Mixins/ImportExport");
const Fileable_1 = require("../Mixins/Fileable");
const Sluggable_1 = require("../Mixins/Sluggable");
const GameEdition_1 = require("../Core/GameEdition");
function createSourcebook(data = {}) {
    const instance = {
        fromJson(json) {
            const properties = JSON.parse(json);
            // Create a game edition.
            if (properties.game_edition) {
                properties.gameEdition = (0, GameEdition_1.createGameEditionFromText)(properties.game_edition);
                delete properties.game_edition;
            }
            // Create media.
            if (properties.cover_image) {
                properties.media = (0, Media_1.createMediaFromFilenameAndDirectory)(properties.cover_image, 'books');
            }
            return createSourcebook(properties);
        },
    };
    const fileableMethods = (0, Fileable_1.getFileableMethods)();
    const importexportableMethods = (0, ImportExport_1.getImportExportableMethods)();
    const sluggableMethods = (0, Sluggable_1.getSluggableMethods)();
    return {
        ...data,
        ...sluggableMethods,
        ...importexportableMethods,
        ...fileableMethods,
        ...instance,
    };
}
