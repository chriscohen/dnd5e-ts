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
exports.createGameEdition = createGameEdition;
exports.createGameEditionFromText = createGameEditionFromText;
exports.createGameEditionFromEnum = createGameEditionFromEnum;
var enums_1 = require("~/enums");
function createGameEdition(data) {
    if (data === void 0) { data = {}; }
    var instance = {};
    return __assign(__assign({}, data), instance);
}
function createGameEditionFromText(input) {
    switch (input.toLowerCase()) {
        case '0':
        case '0e':
        case '0th':
        case 'zero':
        case 'original edition':
            return createGameEditionFromEnum(enums_1.GameEdition.ZERO);
        case '1':
        case '1e':
        case '1st':
        case 'first':
        case 'first edition':
            return createGameEditionFromEnum(enums_1.GameEdition.FIRST);
        case '2':
        case '2e':
        case '2nd':
        case 'second':
        case 'second edition':
            return createGameEditionFromEnum(enums_1.GameEdition.SECOND);
        case '3':
        case '3e':
        case 'third':
        case 'third edition':
            return createGameEditionFromEnum(enums_1.GameEdition.THIRD);
        case '3.5':
        case '3.5e':
        case '3.5 edition':
            return createGameEditionFromEnum(enums_1.GameEdition.TPF);
        case '4':
        case '4e':
        case '4th':
        case 'fourth':
        case 'fourth edition':
            return createGameEditionFromEnum(enums_1.GameEdition.FOURTH);
        case '5':
        case '5e':
        case '5e (2014)':
        case '2014':
        case '5th':
        case '5th (2014)':
        case 'fifth':
        case 'fifth edition':
            return createGameEditionFromEnum(enums_1.GameEdition.FIFTH);
        case '5.5':
        case '5.5e':
        case '5e (2024)':
        case '2024':
        case '5.5 edition':
            return createGameEditionFromEnum(enums_1.GameEdition.FPF);
    }
}
/**
 * Returns a GameEdition object based on the provided enumeration.
 */
function createGameEditionFromEnum(input) {
    switch (input) {
        case enums_1.GameEdition.ZERO:
            return createGameEdition({
                fullName: 'Original Edition',
                name: '0e',
                numeric: '0',
            });
        case enums_1.GameEdition.FIRST:
            return createGameEdition({
                fullName: 'First Edition',
                name: '1e',
                numeric: '1',
            });
        case enums_1.GameEdition.SECOND:
            return createGameEdition({
                fullName: 'AD&D Second Edition',
                name: '2e',
                numeric: '2',
            });
        case enums_1.GameEdition.THIRD:
            return createGameEdition({
                fullName: 'Third Edition',
                name: '3e',
                numeric: '3',
            });
        case enums_1.GameEdition.TPF:
            return createGameEdition({
                fullName: '3.5 Edition',
                name: '3.5',
                numeric: '3.5',
            });
        case enums_1.GameEdition.FOURTH:
            return createGameEdition({
                fullName: '4th Edition',
                name: '4e',
                numeric: '4',
            });
        case enums_1.GameEdition.FIFTH:
            return createGameEdition({
                fullName: '5th Edition',
                name: '5e (2014)',
                numeric: '5',
            });
        case enums_1.GameEdition.FPF:
        default:
            return createGameEdition({
                name: '5e (2024)'
            });
    }
}
