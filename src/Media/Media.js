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
exports.createMedia = createMedia;
exports.createMediaFromFilenameAndDirectory = createMediaFromFilenameAndDirectory;
var constants_1 = require("~/constants");
function createMedia(data) {
    if (data === void 0) { data = {}; }
    var instance = {
        url: function () {
            if (this.directory) {
                return constants_1.CDN_URL + this.directory + '/' + this._url;
            }
            else {
                return constants_1.CDN_URL + this._url;
            }
        }
    };
    return __assign(__assign({}, data), instance);
}
function createMediaFromFilenameAndDirectory(filename, directory) {
    return createMedia({
        directory: directory,
        _url: filename
    });
}
