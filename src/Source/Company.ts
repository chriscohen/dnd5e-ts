import {Media} from "../Media/Media";

export interface Company {
    getProductUrl: () => string | undefined;

    id?: string;
    logo?: Media;
    name?: string;
    productUrl?: string;
    shortName?: string;
    website?: string;
}

export type CompanyProps = Partial<Company>;

export function createCompany(data: CompanyProps = {}): Company {
    const productUrl: string | undefined = data.productUrl;
    const website: string | undefined = data.website;

    const getProductUrl = (): string | undefined => {
        return productUrl ?? website ?? undefined;
    }

    return {
        ...data,
        getProductUrl,
        website
    }
}
