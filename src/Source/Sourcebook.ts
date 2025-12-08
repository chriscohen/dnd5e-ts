import {CampaignSetting, createCampaignSetting} from "./CampaignSetting";
import {createMediaFromFilenameAndDirectory, Media} from "../Media/Media";
import {SourcebookEdition, SourcebookEditionJsonItem} from "./SourcebookEdition";
import {PublicationType, SourcebookType, SourceType} from "../enums";
import {Company} from "./Company";
import {createGameEditionFromText, GameEdition} from "../Types/GameEdition";

export type SourcebookJsonItem = {
    id: string;
    name: string;
    short_name?: string;
    slug?: string;
    cover_image?: string;
    description?: string;
    editions: SourcebookEditionJsonItem[],
    game_edition?: string;
    product_ids?: Record<string, string>[],
    publication_type?: string;
    publisher?: string;
    sourcebook_types?: string[];
}

export interface Sourcebook {
    fromJson: (json: SourcebookJsonItem) => Sourcebook;
    
    id?: string;
    campaignSetting?: CampaignSetting;
    coverImage?: Media;
    description?: string;
    editions?: SourcebookEdition[];
    gameEdition?: GameEdition;
    name?: string;
    productCode?: string;
    productIds?: string[];
    publicationType?: PublicationType;
    publisher?: Company;
    shortName?: string;
    _slug?: string;
    sourceType?: SourceType;
    sourcebookTypes?: SourcebookType[];
}

export type SourcebookProps = Omit<Sourcebook, 'fromJson'>;

export function createSourcebook(data: SourcebookProps = {}): Sourcebook {
    let _id: string | undefined = data.id;
    let _campaignSetting: CampaignSetting | undefined = data.campaignSetting;
    let _coverImage: Media | undefined = data.coverImage;
    let _description: string | undefined = data.description;
    let _editions: SourcebookEdition[] | undefined = data.editions;
    let _gameEdition: GameEdition | undefined = data.gameEdition;
    let _name: string | undefined = data.name;
    let _productCode: string | undefined = data.productCode;
    let _productIds: string[] | undefined = data.productIds;
    let _publicationType: PublicationType | undefined = data.publicationType;
    let _publisher: Company | undefined = data.publisher;
    let _shortName: string | undefined = data.shortName;
    let _slug: string | undefined = data._slug;
    let _sourceType: SourceType | undefined = data.sourceType;
    let _sourcebookTypes: SourcebookType[] | undefined = data.sourcebookTypes;
    
    function fromJson(json: SourcebookJsonItem): Sourcebook {
        let sourcebook: SourcebookProps = {};

        sourcebook.id = json.id;
        sourcebook.campaignSetting = createCampaignSetting({slug: json.slug});

        // Create a game edition.
        if (json.game_edition) {
            sourcebook.gameEdition = createGameEditionFromText(json.game_edition);
        }

        // Create media.
        if (json.cover_image) {
            sourcebook.coverImage = createMediaFromFilenameAndDirectory(json.cover_image, 'books');
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
