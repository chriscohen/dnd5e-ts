"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alignment = void 0;
const enums_1 = require("~/enums");
class Alignment {
    constructor(props) {
        this.lawChaos = props.lawChaos ?? enums_1.AlignmentLawChaos.NEUTRAL;
        this.goodEvil = props.goodEvil ?? enums_1.AlignmentGoodEvil.NEUTRAL;
    }
}
exports.Alignment = Alignment;
