"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImportExportableMethods = getImportExportableMethods;
function getImportExportableMethods() {
    return {
        fromJson(json) { },
        fromYaml(yaml) { },
        toJson() {
            return '';
        },
        toYaml() {
            return '';
        }
    };
}
