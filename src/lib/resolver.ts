import { Language, LocaleFileName } from "./enum";
import { Addon, Item, LocaleData, Offering, Perk, Player, Power, Resolver } from "./types";

interface ImportedModule<T> {
    default: T;
}

class LocaleResolver implements Resolver {
    locales: { [key: string]: LocaleData } = {};

    private async import<T>(language: Language, file: LocaleFileName): Promise<T> {
        const { default: data } = (await import(
            /* webpackInclude: /\.json$/ */
            /* webpackMode: "lazy" */
            /* webpackChunkName: "deadbydaylight." */
            `../data.compiled/locales/${language}/${file}.json`
        )) as ImportedModule<T>;
        return data;
    }

    async get(language: Language): Promise<LocaleData> {
        if (!(language in this.locales)) {
            const data: LocaleData = {
                items: [],
                killerAddons: [],
                killerOfferings: [],
                killerPerks: [],
                killers: [],
                powers: [],
                sharedOfferings: [],
                survivorAddons: [],
                survivorPerks: [],
                survivorOfferings: [],
                survivors: [],
                language,
            };

            data.items = await this.import<Item[]>(language, LocaleFileName.Items);
            data.killerAddons = await this.import<Addon[]>(language, LocaleFileName.KillerAddons);
            data.killerOfferings = await this.import<Offering[]>(
                language,
                LocaleFileName.KillerOfferings
            );
            data.killerPerks = await this.import<Perk[]>(language, LocaleFileName.KillerPerks);
            data.killers = await this.import<Player[]>(language, LocaleFileName.Killers);
            data.powers = await this.import<Power[]>(language, LocaleFileName.Powers);
            data.sharedOfferings = await this.import<Offering[]>(
                language,
                LocaleFileName.SharedOfferings
            );
            data.survivorAddons = await this.import<Addon[]>(
                language,
                LocaleFileName.SurvivorAddons
            );
            data.survivorPerks = await this.import<Perk[]>(language, LocaleFileName.SurvivorPerks);
            data.survivorOfferings = await this.import<Offering[]>(
                language,
                LocaleFileName.SurvivorAddons
            );
            data.survivors = await this.import<Player[]>(language, LocaleFileName.Survivors);
            this.locales[language] = data;
        }

        return this.locales[language];
    }
}

export default LocaleResolver;
