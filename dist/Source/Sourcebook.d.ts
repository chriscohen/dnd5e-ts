import { CampaignSetting } from "./CampaignSetting";
import { Media } from "../Media/Media";
import { SourcebookEdition } from "./SourcebookEdition";
import { GameEditionEnum, PublicationType, SourcebookType, SourceType } from "../enums";
import { Company } from "./Company";
import { ImportExportable } from "../Mixins/ImportExport";
import { Fileable } from "../Mixins/Fileable";
import { Sluggable } from "../Mixins/Sluggable";
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
export declare function createSourcebook(data?: Sourcebook): Sourcebook & Fileable<Sourcebook> & ImportExportable<Sourcebook> & Sluggable<Sourcebook>;
//# sourceMappingURL=Sourcebook.d.ts.map