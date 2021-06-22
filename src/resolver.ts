import fetch from "isomorphic-fetch";
import Util from "./util";
import { Language } from "./enum";
import { Addon, Item, LocaleData, Offering, Perk, Player, Power } from "./types";

class LocaleResolver {
    locales: { [key: string]: LocaleData } = {};

    private async fetch<T>(language: Language, file: string): Promise<T> {
        const base = process.env.PROVIDER_URL?.replace("$VERSION", Util.version());
        const response = await fetch(`${base}/data/${language}/${file}.json`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        return json as T;
    }

    async get(language: Language): Promise<LocaleData> {
        if (!(language in this.locales)) {
            const items = await this.fetch<Item[]>(language, "items");
            const killerAddons = await this.fetch<Addon[]>(language, "killerAddons");
            const killerOfferings = await this.fetch<Offering[]>(language, "killerOfferings");
            const killerPerks = await this.fetch<Perk[]>(language, "killerPerks");
            const killers = await this.fetch<Player[]>(language, "killers");
            const powers = await this.fetch<Power[]>(language, "powers");
            const sharedOfferings = await this.fetch<Offering[]>(language, "sharedOfferings");
            const survivorAddons = await this.fetch<Addon[]>(language, "survivorAddons");
            const survivorPerks = await this.fetch<Perk[]>(language, "survivorPerks");
            const survivorOfferings = await this.fetch<Offering[]>(language, "survivorOfferings");
            const survivors = await this.fetch<Player[]>(language, "survivors");

            this.locales[language] = {
                items,
                killerAddons,
                killerOfferings,
                killerPerks,
                killers,
                powers,
                sharedOfferings,
                survivorAddons,
                survivorOfferings,
                survivorPerks,
                survivors,
                language,
            };
        }

        return this.locales[language];
    }
}

export default LocaleResolver;
