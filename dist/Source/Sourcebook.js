"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourcebook = createSourcebook;
const CampaignSetting_1 = require("./CampaignSetting");
const Media_1 = require("../Media/Media");
const GameEdition_1 = require("../Types/GameEdition");
function createSourcebook(data = {}) {
    let _id = data.id;
    let _campaignSetting = data.campaignSetting;
    let _coverImage = data.coverImage;
    let _description = data.description;
    let _editions = data.editions;
    let _gameEdition = data.gameEdition;
    let _name = data.name;
    let _productCode = data.productCode;
    let _productIds = data.productIds;
    let _publicationType = data.publicationType;
    let _publisher = data.publisher;
    let _shortName = data.shortName;
    let _slug = data._slug;
    let _sourceType = data.sourceType;
    let _sourcebookTypes = data.sourcebookTypes;
    function fromJson(json) {
        let sourcebook = {};
        sourcebook.id = json.id;
        sourcebook.campaignSetting = (0, CampaignSetting_1.createCampaignSetting)({ slug: json.slug });
        // Create a game edition.
        if (json.game_edition) {
            sourcebook.gameEdition = (0, GameEdition_1.createGameEditionFromText)(json.game_edition);
        }
        // Create media.
        if (json.cover_image) {
            sourcebook.coverImage = (0, Media_1.createMediaFromFilenameAndDirectory)(json.cover_image, 'books');
        }
        return createSourcebook(sourcebook);
    }
    return {
        fromJson,
        id: _id,
        campaignSetting: _campaignSetting,
        coverImage: _coverImage,
        description: _description,
        editions: _editions,
        gameEdition: _gameEdition,
        name: _name,
        productCode: _productCode,
        productIds: _productIds,
        publicationType: _publicationType,
        publisher: _publisher,
        shortName: _shortName,
        _slug: _slug,
        sourceType: _sourceType,
        sourcebookTypes: _sourcebookTypes,
    };
}
