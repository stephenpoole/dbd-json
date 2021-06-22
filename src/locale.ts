import { Language } from "./enum";
import { Addon, Item, LocaleData, Offering, Perk, Player, Power } from "./types";
import * as Locales from "./locales";

class Locale {
    data!: LocaleData;

    constructor(language: Language) {
        this.changeLanguage(language);
    }

    changeLanguage(language: Language): void {
        const currentLanguage = this.data ? this.data.language : undefined;
        if (language === currentLanguage) {
            return;
        }

        let data: LocaleData;
        switch (language) {
            case Language.Chinese:
                data = Locales.zh;
                break;
            case Language.English:
                data = Locales.en;
                break;
            case Language.French:
                data = Locales.fr;
                break;
            case Language.German:
                data = Locales.de;
                break;
            case Language.Italian:
                data = Locales.it;
                break;
            case Language.Japanese:
                data = Locales.jp;
                break;
            case Language.Korean:
                data = Locales.ko;
                break;
            case Language.Polish:
                data = Locales.pl;
                break;
            case Language.Russian:
                data = Locales.ru;
                break;
            case Language.Spanish:
                data = Locales.es;
                break;
            case Language.Taiwanese:
                data = Locales.th;
                break;
            case Language.Turkish:
                data = Locales.tr;
                break;
            default:
                data = Locales.en;
                break;
        }

        this.data = data;
    }

    get language(): Language {
        return this.data.language;
    }

    get items(): Item[] {
        return this.data.items;
    }

    get killerAddons(): Addon[] {
        return this.data.killerAddons;
    }

    get killerOfferings(): Offering[] {
        return this.data.killerOfferings;
    }

    get killerPerks(): Perk[] {
        return this.data.killerPerks;
    }

    get killers(): Player[] {
        return this.data.killers;
    }

    get powers(): Power[] {
        return this.data.powers;
    }

    get sharedOfferings(): Offering[] {
        return this.data.sharedOfferings;
    }

    get survivorAddons(): Addon[] {
        return this.data.survivorAddons;
    }

    get survivorPerks(): Perk[] {
        return this.data.survivorPerks;
    }

    get survivors(): Player[] {
        return this.data.survivors;
    }
}

export default Locale;
