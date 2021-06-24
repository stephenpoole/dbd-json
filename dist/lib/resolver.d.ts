import { Language } from "./enum";
import { LocaleData, Resolver } from "./types";
declare class LocaleResolver implements Resolver {
    locales: {
        [key: string]: LocaleData;
    };
    private import;
    get(language: Language): Promise<LocaleData>;
}
export default LocaleResolver;
