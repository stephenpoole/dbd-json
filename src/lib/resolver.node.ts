import { Language } from "./enum";
import { LocaleData, Resolver } from "./types";
import * as Locales from "./locales";

class LocaleResolver implements Resolver {
    locales: { [key: string]: LocaleData } = {};

    async get(language: Language): Promise<LocaleData> {
        return Locales[language];
    }
}

export default LocaleResolver;
