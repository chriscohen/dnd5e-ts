export interface Language {
    hasScript: () => boolean;
    isExotic: boolean;
    name?: string;
    scriptName?: string;
    slug?: string;
}
export type LanguageProps = Omit<Language, 'hasScript'>;
export declare function createLanguage(data: LanguageProps): Language;
/**
 * @throws Error
 */
export declare function loadLanguage(slug: string): Language | undefined;
/**
 * @throws Error
 */
export declare function loadLanguages(): Language[];
//# sourceMappingURL=Language.d.ts.map