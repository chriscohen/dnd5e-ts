import {Binding, SourcebookFormat} from "../enums";

export type SourcebookEditionJsonItem = {
    id: string;
    name: string;
    binding?: string;
    formats?: string[];
    isbn10?: string;
    isbn13?: string;
    is_primary: boolean;
    pages?: number;
    release_date?: string;
}

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

export function createSourcebookEdition(data: SourcebookEdition = {
    formats: [],
    isPrimary: false
}): SourcebookEdition {
    const instance = {};

    return {
        ...data,
        ...instance
    }
}
