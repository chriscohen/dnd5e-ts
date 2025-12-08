import {createMediaFromFilenameAndDirectory, Media} from "../Media/Media";
import {Company} from "./Company";
import {PublicationType} from "../enums";
import {getJsonFromDataFile, makeSlug} from "../utils";

export type CampaignSettingJsonItem = {
    id: string;
    name: string;
    shortName?: string;
    publisher?: string;
    publicationType?: string;
    logo?: string
}

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

export function createCampaignSetting(data: CampaignSettingProps = {}): CampaignSetting {
    const _id: string | undefined = data.id;
    const _logo: Media | undefined = data.logo;
    const _name: string | undefined = data.name;
    const _publicationType: PublicationType | undefined = data.publicationType;
    const _publisher: Company | undefined = data.publisher;
    const _shortName: string | undefined = data.shortName;
    const _slug: string | undefined = data.slug;

    function fromJson(json: CampaignSettingJsonItem): CampaignSetting {
        const campaignSetting: CampaignSettingProps = {};
        campaignSetting.id = json.id;
        if (json.logo) {
            campaignSetting.logo = createMediaFromFilenameAndDirectory(json.logo, 'campaign-settings');
        }
        campaignSetting.name = json.name;
        // TODO: Load publication type.
        campaignSetting.publicationType = undefined;
        // TODO: Load publisher.
        campaignSetting.publisher = undefined;
        campaignSetting.shortName = json.shortName;
        campaignSetting.slug = makeSlug(json.name);
        return createCampaignSetting(campaignSetting);
    }

    function getSlug(this: CampaignSetting): string {
        if (this.slug) return this.slug;
        else if (this.name) return makeSlug(this.name);
        else throw new Error('Cannot generate slug for campaign setting with no name.');
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
    }
}

export function loadCampaignSetting(name: string): CampaignSetting | undefined {
    const json = getJsonFromDataFile('types/campaignSettings.json');
    const item = json.find((item: CampaignSettingJsonItem) => item.name.toLowerCase() === name.toLowerCase());

    if (item) return createCampaignSetting().fromJson(item);
    return undefined;
}

export function loadCampaignSettings(): CampaignSetting[] {
    const json = getJsonFromDataFile('types/campaignSettings.json');
    const output: CampaignSetting[] = [];

    json.forEach((item: CampaignSettingJsonItem) => {
        output.push(createCampaignSetting().fromJson(item));
    });

    return output;
}
