import {Binding, SourcebookFormat} from "~/enums";

export class SourcebookEdition {
    id?: string;
    binding?: Binding;
    formats: SourcebookFormat[] = [];
    isPrimary: boolean = false;
    isbn10?: string;
    isbn13?: string;
    name?: string;
    pages?: number;
    releaseDate?: Date;
    releaseDateMonthOnly?: boolean;
}
