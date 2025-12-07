"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImportExportableMethods = getImportExportableMethods;
function getImportExportableMethods() {
    return {
        fromJson: function (json) { },
        fromYaml: function (yaml) { },
        toJson: function () {
            return '';
        },
        toYaml: function () {
            return '';
        }
    };
}
