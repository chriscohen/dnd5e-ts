"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceResult = void 0;
class DiceResult {
    constructor(props = {}) {
        this.total = 0;
        this.rolls = [];
        this.modifier = 0;
        this.total = props.total ?? 0;
        this.rolls = props.rolls ?? [];
        this.modifier = props.modifier ?? 0;
    }
    static create(props) {
        return new DiceResult(props);
    }
}
exports.DiceResult = DiceResult;
