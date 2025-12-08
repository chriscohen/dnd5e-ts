import { Language } from "../Senses/Language";
export interface ActorLanguage {
    canSpeak?: boolean;
    canUnderstand?: boolean;
    language?: Language;
}
export declare function createActorLanguage(data?: ActorLanguage | string): ActorLanguage;
//# sourceMappingURL=ActorLanguage.d.ts.map