import { Binding, SourcebookFormat } from "~/enums";
export interface SourcebookEdition {
    id?: string;
    binding?: Binding;
    formats: SourcebookFormat[];
    isPrimary: boolean;
    isbn10?: string;
    isbn13?: string;
    name?: string;
    pages?: number;
    releaseDate?: Date;
    releaseDateMonthOnly?: boolean;
}
export declare function createSourcebookEdition(data?: SourcebookEdition): SourcebookEdition;
//# sourceMappingURL=SourcebookEdition.d.ts.map