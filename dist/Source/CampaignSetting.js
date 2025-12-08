"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCampaignSetting = createCampaignSetting;
exports.loadCampaignSetting = loadCampaignSetting;
exports.loadCampaignSettings = loadCampaignSettings;
const Media_1 = require("../Media/Media");
const utils_1 = require("../utils");
function createCampaignSetting(data = {}) {
    const _id = data.id;
    const _logo = data.logo;
    const _name = data.name;
    const _publicationType = data.publicationType;
    const _publisher = data.publisher;
    const _shortName = data.shortName;
    const _slug = data.slug;
    function fromJson(json) {
        const campaignSetting = {};
        campaignSetting.id = json.id;
        if (json.logo) {
            campaignSetting.logo = (0, Media_1.createMediaFromFilenameAndDirectory)(json.logo, 'campaign-settings');
        }
        campaignSetting.name = json.name;
        // TODO: Load publication type.
        campaignSetting.publicationType = undefined;
        // TODO: Load publisher.
        campaignSetting.publisher = undefined;
        campaignSetting.shortName = json.shortName;
        campaignSetting.slug = (0, utils_1.makeSlug)(json.name);
        return createCampaignSetting(campaignSetting);
    }
    function getSlug() {
        if (this.slug)
            return this.slug;
        else if (this.name)
            return (0, utils_1.makeSlug)(this.name);
        else
            throw new Error('Cannot generate slug for campaign setting with no name.');
    }
    return {
        fromJson,
        getSlug,
        id: _id,
        logo: _logo,
        name: _name,
        publicationType: _publicationType,
        publisher: _publisher,
        shortName: _shortName,
        slug: _slug
    };
}
function loadCampaignSetting(name) {
    const json = (0, utils_1.getJsonFromDataFile)('types/campaignSettings.json');
    const item = json.find((item) => item.name.toLowerCase() === name.toLowerCase());
    if (item)
        return createCampaignSetting().fromJson(item);
    return undefined;
}
function loadCampaignSettings() {
    const json = (0, utils_1.getJsonFromDataFile)('types/campaignSettings.json');
    const output = [];
    json.forEach((item) => {
        output.push(createCampaignSetting().fromJson(item));
    });
    return output;
}
