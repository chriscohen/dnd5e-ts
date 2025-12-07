"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importFrom5eTools = importFrom5eTools;
const constants_1 = require("../constants");
const axios_1 = __importDefault(require("axios"));
/**
 *
 * @param path Should be the refs/heads/... part of the URL, and should be a JSON file.
 */
async function importFrom5eTools(path) {
    const response = await axios_1.default.get(constants_1.FE_TOOLS_URL + path);
    console.log(response.data);
    return response.data;
}
