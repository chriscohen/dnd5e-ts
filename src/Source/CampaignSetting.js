"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignSetting = void 0;
var utils_1 = require("~/utils");
var CampaignSetting = /** @class */ (function () {
    function CampaignSetting() {
    }
    Object.defineProperty(CampaignSetting.prototype, "slug", {
        get: function () {
            var _a;
            return (_a = this._slug) !== null && _a !== void 0 ? _a : utils_1.Slugifier.slugify(this.name);
        },
        enumerable: false,
        configurable: true
    });
    return CampaignSetting;
}());
exports.CampaignSetting = CampaignSetting;
