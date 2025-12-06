import {Slugifier} from "~/utils";
import {CampaignSetting} from "~/Source/CampaignSetting";
import {Media} from "~/Media/Media";
import {SourcebookEdition} from "~/Source/SourcebookEdition";
import {GameEdition, PublicationType, SourcebookType, SourceType} from "~/enums";
import {Company} from "~/Source/Company";

export type SourcebookProps = {

}

export class Sourcebook {
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
    sourceType?: SourceType;
    sourcebookTypes?: SourcebookType[];
    _slug?: string;

    get slug(): string {
        return this._slug ?? Slugifier.slugify(this.name);
    }
}
