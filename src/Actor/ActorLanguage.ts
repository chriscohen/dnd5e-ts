import {Language, loadLanguage} from "../Senses/Language";

export interface ActorLanguage {
    canSpeak?: boolean;
    canUnderstand?: boolean;
    language?: Language;
}

export function createActorLanguage(data: ActorLanguage | string = {}): ActorLanguage {
    let _canSpeak: boolean = false;
    let _canUnderstand: boolean = false;
    let _language: Language | undefined;

    // If a simple string was passed, we will try to load the language from JSON. If we can, we will also set canSpeak
    // and canUnderstand to true.
    if (typeof data === 'string') {
        _language = loadLanguage(data);
        if (_language !== undefined) (
            _canSpeak = true,
            _canUnderstand = true
        );
    } else {
        // If JSON was passed, we will just assign the values directly.
        _canSpeak = data.canSpeak ?? false;
        _canUnderstand = data.canUnderstand ?? false;
        _language = data.language;
    }

    return {
        canSpeak: _canSpeak,
        canUnderstand: _canUnderstand,
        language: _language
    }
}
