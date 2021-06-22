import { Language } from "./enum";
import { LocaleData } from "./types";
declare class LocaleResolver {
    locales: {
        [key: string]: LocaleData;
    };
    private fetch;
    get(language: Language): Promise<LocaleData>;
}
export default LocaleResolver;
