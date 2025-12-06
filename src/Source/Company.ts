import {Media} from "~/Media/Media";

export class Company {
    id?: string;
    logo?: Media;
    name?: string;
    _productUrl?: string;
    shortName?: string;
    website?: string;

    get productUrl(): string {
        return this._productUrl ?? this.website;
    }
}
