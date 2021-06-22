import { Language } from "./enum";
import { Addon, Item, LocaleData, Offering, Perk, Player, Power } from "./types";
import LocaleResolver from "./resolver";

class Locale {
    data!: LocaleData;
    resolver = new LocaleResolver();

    async changeLanguage(language: Language): Promise<void> {
        const currentLanguage = this.data ? this.data.language : undefined;
        if (language === currentLanguage) {
            return;
        }

        const data: LocaleData = await this.resolver.get(language);
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
