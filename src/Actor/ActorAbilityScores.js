"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorAbilityScores = void 0;
var AbilityScore_1 = require("~/AbilityScore/AbilityScore");
var enums_1 = require("~/enums");
var ActorAbilityScores = /** @class */ (function () {
    function ActorAbilityScores(str, dex, con, int, wis, cha) {
        if (str === undefined)
            this.str = AbilityScore_1.AbilityScore.create({ type: enums_1.AbilityType.STR });
        else
            this.str = AbilityScore_1.AbilityScore.create(str);
        if (dex === undefined)
            this.dex = AbilityScore_1.AbilityScore.create({ type: enums_1.AbilityType.DEX });
        else
            this.dex = AbilityScore_1.AbilityScore.create(dex);
        if (con === undefined)
            this.con = AbilityScore_1.AbilityScore.create({ type: enums_1.AbilityType.CON });
        else
            this.con = AbilityScore_1.AbilityScore.create(con);
        if (int === undefined)
            this.int = AbilityScore_1.AbilityScore.create({ type: enums_1.AbilityType.INT });
        else
            this.int = AbilityScore_1.AbilityScore.create(int);
        if (wis === undefined)
            this.wis = AbilityScore_1.AbilityScore.create({ type: enums_1.AbilityType.WIS });
        else
            this.wis = AbilityScore_1.AbilityScore.create(wis);
        if (cha === undefined)
            this.cha = AbilityScore_1.AbilityScore.create({ type: enums_1.AbilityType.CHA });
        else
            this.cha = AbilityScore_1.AbilityScore.create(cha);
    }
    ActorAbilityScores.create = function (props) {
        if (props === void 0) { props = {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10
        }; }
        return new ActorAbilityScores(props.str, props.dex, props.con, props.int, props.wis, props.cha);
    };
    return ActorAbilityScores;
}());
exports.ActorAbilityScores = ActorAbilityScores;
