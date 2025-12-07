"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileableMethods = getFileableMethods;
var fs = require("node:fs");
function getFileableMethods() {
    return {
        fromFileSync: function (path) {
            try {
                return fs.readFileSync(path, 'utf8');
            }
            catch (error) {
                console.error("There was an error reading the file at ".concat(path), error.message);
                return false;
            }
        },
        toFileSync: function (path, data) {
            return false;
        },
        fromFileAsync: function (path) {
            return new Promise(function (resolve, reject) {
            });
        },
        toFileAsync: function (path, data) {
            return new Promise(function (resolve, reject) {
            });
        }
    };
}
