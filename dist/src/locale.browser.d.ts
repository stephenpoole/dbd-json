import { Language } from "./enum";
import { Addon, Item, LocaleData, Offering, Perk, Player, Power } from "./types";
import LocaleResolver from "./resolver";
declare class Locale {
    data: LocaleData;
    resolver: LocaleResolver;
    changeLanguage(language: Language): Promise<void>;
    get language(): Language;
    get items(): Item[];
    get killerAddons(): Addon[];
    get killerOfferings(): Offering[];
    get killerPerks(): Perk[];
    get killers(): Player[];
    get powers(): Power[];
    get sharedOfferings(): Offering[];
    get survivorAddons(): Addon[];
    get survivorPerks(): Perk[];
    get survivors(): Player[];
}
export default Locale;
