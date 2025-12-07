"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorType = void 0;
var ActorAbilityScores_1 = require("~/Actor/ActorAbilityScores");
var ArmorClass_1 = require("~/ArmorClass");
var ActorHitPoints_1 = require("~/Actor/ActorHitPoints");
var ActorMovementSpeeds_1 = require("~/MovementSpeed/ActorMovementSpeeds");
var ActorType = /** @class */ (function () {
    function ActorType(props) {
        var _a, _b, _c;
        this.abilities = ActorAbilityScores_1.ActorAbilityScores.create(props === null || props === void 0 ? void 0 : props.abilities);
        this.armorClass = (_a = props === null || props === void 0 ? void 0 : props.armorClass) !== null && _a !== void 0 ? _a : new ArmorClass_1.ArmorClass();
        this.hitPoints = (_b = props === null || props === void 0 ? void 0 : props.hitPoints) !== null && _b !== void 0 ? _b : new ActorHitPoints_1.ActorHitPoints();
        this.movementSpeeds = (_c = props === null || props === void 0 ? void 0 : props.movementSpeeds) !== null && _c !== void 0 ? _c : new ActorMovementSpeeds_1.ActorMovementSpeeds();
    }
    ActorType.create = function (props) {
        return new ActorType(props);
    };
    return ActorType;
}());
exports.ActorType = ActorType;
