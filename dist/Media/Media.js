"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMedia = createMedia;
exports.createMediaFromFilenameAndDirectory = createMediaFromFilenameAndDirectory;
const constants_1 = require("../constants");
function createMedia(data = {}) {
    const instance = {
        url() {
            if (data.directory) {
                return constants_1.CDN_URL + data.directory + '/' + data._url;
            }
            else {
                return constants_1.CDN_URL + data._url;
            }
        }
    };
    return {
        ...data,
        ...instance
    };
}
function createMediaFromFilenameAndDirectory(filename, directory) {
    return createMedia({
        directory,
        _url: filename
    });
}
