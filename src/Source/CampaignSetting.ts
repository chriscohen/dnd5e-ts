import {Slugifier} from "~/utils";
import {Media} from "~/Media/Media";
import {Company} from "~/Source/Company";
import {PublicationType} from "~/enums";

export class CampaignSetting {
    id?: string;
    _slug?: string;
    logo?: Media;
    publicationType?: PublicationType;
    publisher?: Company;
    name?: string;
    shortName?: string;

    get slug(): string {
        return this._slug ?? Slugifier.slugify(this.name);
    }
}
