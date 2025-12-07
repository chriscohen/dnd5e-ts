"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCampaignSetting = createCampaignSetting;
const utils_1 = require("../utils");
function createCampaignSetting(data) {
    const name = data.name;
    const slug = data.slug;
    const getSlug = () => {
        return slug ?? (0, utils_1.makeSlug)(name);
    };
    return {
        ...data,
        getSlug,
        name,
        slug
    };
}
