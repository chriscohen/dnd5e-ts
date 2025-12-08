import { Media } from "../Media/Media";
import { Company } from "./Company";
import { PublicationType } from "../enums";
export type CampaignSettingJsonItem = {
    id: string;
    name: string;
    shortName?: string;
    publisher?: string;
    publicationType?: string;
    logo?: string;
};
export interface CampaignSetting {
    fromJson: (json: CampaignSettingJsonItem) => CampaignSetting;
    getSlug: (this: CampaignSetting) => string;
    id?: string;
    logo?: Media;
    name?: string;
    publicationType?: PublicationType;
    publisher?: Company;
    shortName?: string;
    slug?: string;
}
export type CampaignSettingProps = Omit<CampaignSetting, 'fromJson' | 'getSlug'>;
export declare function createCampaignSetting(data?: CampaignSettingProps): CampaignSetting;
export declare function loadCampaignSetting(name: string): CampaignSetting | undefined;
export declare function loadCampaignSettings(): CampaignSetting[];
//# sourceMappingURL=CampaignSetting.d.ts.map