"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActorLanguage = createActorLanguage;
const Language_1 = require("../Senses/Language");
function createActorLanguage(data = {}) {
    let _canSpeak = false;
    let _canUnderstand = false;
    let _language;
    // If a simple string was passed, we will try to load the language from JSON. If we can, we will also set canSpeak
    // and canUnderstand to true.
    if (typeof data === 'string') {
        _language = (0, Language_1.loadLanguage)(data);
        if (_language !== undefined)
            (_canSpeak = true,
                _canUnderstand = true);
    }
    else {
        // If JSON was passed, we will just assign the values directly.
        _canSpeak = data.canSpeak ?? false;
        _canUnderstand = data.canUnderstand ?? false;
        _language = data.language;
    }
    return {
        canSpeak: _canSpeak,
        canUnderstand: _canUnderstand,
        language: _language
    };
}
