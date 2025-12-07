import {CampaignSetting} from "~/Source/CampaignSetting";
import {createMediaFromFilenameAndDirectory, Media} from "~/Media/Media";
import {SourcebookEdition} from "~/Source/SourcebookEdition";
import {GameEditionEnum, PublicationType, SourcebookType, SourceType} from "~/enums";
import {Company} from "~/Source/Company";
import {getImportExportableMethods, ImportExportable} from "~/Mixins/ImportExport";
import {Fileable, getFileableMethods} from "~/Mixins/Fileable";
import {getSluggableMethods, Sluggable} from "~/Mixins/Sluggable";
import {createGameEditionFromText} from "~/Core/GameEdition";

export interface Sourcebook {
    id?: string;
    campaignSetting?: CampaignSetting;
    coverImage?: Media;
    description?: string;
    editions?: SourcebookEdition[];
    gameEdition?: GameEditionEnum;
    name?: string;
    productCode?: string;
    productIds?: string[];
    publicationType?: PublicationType;
    publisher?: Company;
    shortName?: string;
    sourceType?: SourceType;
    sourcebookTypes?: SourcebookType[];
    _slug?: string;
}

export function createSourcebook(data: Sourcebook = {}):
    Sourcebook &
    Fileable<Sourcebook> &
    ImportExportable<Sourcebook> &
    Sluggable<Sourcebook>
{
    const instance = {
        fromJson(json: string): Sourcebook {
            const properties = JSON.parse(json);

            // Create a game edition.
            if (properties.game_edition) {
                properties.gameEdition = createGameEditionFromText(properties.game_edition);
                delete properties.game_edition;
            }

            // Create media.
            if (properties.cover_image) {
                properties.media = createMediaFromFilenameAndDirectory(properties.cover_image, 'books');
            }

            return createSourcebook(properties);
        },
    };

    const fileableMethods = getFileableMethods<Sourcebook>();
    const importexportableMethods = getImportExportableMethods<Sourcebook>();
    const sluggableMethods = getSluggableMethods<Sourcebook>();

    return {
        ...data,
        ...sluggableMethods,
        ...importexportableMethods,
        ...fileableMethods,
        ...instance,
    };
}
