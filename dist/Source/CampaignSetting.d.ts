import { Media } from "~/Media/Media";
import { Company } from "~/Source/Company";
import { PublicationType } from "~/enums";
export interface CampaignSetting {
    getSlug: () => string;
    id?: string;
    slug?: string;
    logo?: Media;
    publicationType?: PublicationType;
    publisher?: Company;
    name: string;
    shortName?: string;
}
export type CampaignSettingProps = Omit<CampaignSetting, 'getSlug'>;
export declare function createCampaignSetting(data: CampaignSettingProps): CampaignSetting;
//# sourceMappingURL=CampaignSetting.d.ts.map