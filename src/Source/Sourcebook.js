"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourcebook = createSourcebook;
var Media_1 = require("~/Media/Media");
var ImportExport_1 = require("~/Mixins/ImportExport");
var Fileable_1 = require("~/Mixins/Fileable");
var Sluggable_1 = require("~/Mixins/Sluggable");
var GameEdition_1 = require("~/Core/GameEdition");
function createSourcebook(data) {
    if (data === void 0) { data = {}; }
    var instance = {
        fromJson: function (json) {
            var properties = JSON.parse(json);
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
    var fileableMethods = (0, Fileable_1.getFileableMethods)();
    var importexportableMethods = (0, ImportExport_1.getImportExportableMethods)();
    var sluggableMethods = (0, Sluggable_1.getSluggableMethods)();
    return __assign(__assign(__assign(__assign(__assign({}, data), sluggableMethods), importexportableMethods), fileableMethods), instance);
}
