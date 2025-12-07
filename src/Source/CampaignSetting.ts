import {Media} from "../Media/Media";
import {Company} from "./Company";
import {PublicationType} from "../enums";
import {makeSlug} from "../utils";

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

export function createCampaignSetting(data: CampaignSettingProps): CampaignSetting {
    const name: string = data.name;
    const slug: string | undefined = data.slug;

    const getSlug = (): string => {
        return slug ?? makeSlug(name);
    }

    return {
        ...data,
        getSlug,
        name,
        slug
    }
}
