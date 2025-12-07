import { Media } from "../Media/Media";
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
export declare function createCompany(data?: CompanyProps): Company;
//# sourceMappingURL=Company.d.ts.map