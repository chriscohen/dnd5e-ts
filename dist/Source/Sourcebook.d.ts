import { CampaignSetting } from "./CampaignSetting";
import { Media } from "../Media/Media";
import { SourcebookEdition, SourcebookEditionJsonItem } from "./SourcebookEdition";
import { PublicationType, SourcebookType, SourceType } from "../enums";
import { Company } from "./Company";
import { GameEdition } from "../Types/GameEdition";
export type SourcebookJsonItem = {
    id: string;
    name: string;
    short_name?: string;
    slug?: string;
    cover_image?: string;
    description?: string;
    editions: SourcebookEditionJsonItem[];
    game_edition?: string;
    product_ids?: Record<string, string>[];
    publication_type?: string;
    publisher?: string;
    sourcebook_types?: string[];
};
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
export declare function createSourcebook(data?: SourcebookProps): Sourcebook;
//# sourceMappingURL=Sourcebook.d.ts.map