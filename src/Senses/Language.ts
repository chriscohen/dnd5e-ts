import {getJsonFromDataFile} from "../utils";

export interface Language {
    hasScript: () => boolean;

    isExotic: boolean;
    name?: string;
    scriptName?: string;
    slug?: string;
}

export type LanguageProps = Omit<Language, 'hasScript'>;

export function createLanguage(data: LanguageProps): Language {
    const _isExotic: boolean = data.isExotic ?? false;
    const _name: string | undefined = data.name;
    const _scriptName: string | undefined = data.scriptName;
    const _slug: string | undefined = data.slug;

    function hasScript(): boolean {
        return _scriptName !== undefined;
    }

    return {
        hasScript,

        isExotic: _isExotic,
        name: _name,
        scriptName: _scriptName,
        slug: _slug
    };
}

/**
 * @throws Error
 */
export function loadLanguage(slug: string): Language | undefined {
    return getJsonFromDataFile('types/languages.json').find(
        (language: Language) => language.slug === slug.toLowerCase()
    );
}

/**
 * @throws Error
 */
export function loadLanguages(): Language[] {
    return getJsonFromDataFile('types/languages.json');
}
