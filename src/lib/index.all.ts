import { ItemType, Language } from "./enum";
import { Killer, Survivor, Power, Item, Addon, Offering, Perk } from "../data.compiled/enum";
import Factories from "./factories";
import {
    Addon as AddonModel,
    Item as ItemModel,
    Offering as OfferingModel,
    Perk as PerkModel,
    Player as PlayerModel,
    Power as PowerModel,
    EmptyAddon as EmptyAddonModel,
    EmptyItem as EmptyItemModel,
    EmptyOffering as EmptyOfferingModel,
    EmptyPerk as EmptyPerkModel,
    EmptyPlayer as EmptyPlayerModel,
    EmptyPower as EmptyPowerModel,
} from "./factory/model";
import Locale from "./locale";
import { LocaleData } from "./types";

class Dbd {
    defaultLanguage = Language.English;
    localesData: { [key: string]: LocaleData } = {};
    factories: { [key: string]: Factories } = {};

    constructor(
        defaultLanguage: Language = Language.English,
        localesData: { [key: string]: LocaleData }
    ) {
        this.defaultLanguage = defaultLanguage;
        this.localesData = localesData;
    }

    setDefaultLanguage(language: Language): void {
        this.defaultLanguage = language;
    }

    private getFactory(language: string): Factories {
        const hasLanguage = language in this.localesData;
        const newLanguage = hasLanguage ? language : this.defaultLanguage;

        if (language in this.factories) {
            return this.factories[language];
        }

        const locale = new Locale(this.localesData[newLanguage]);
        const factory = new Factories(locale);
        this.factories[newLanguage] = factory;
        return factory;
    }

    item(key: string | Item, language = this.defaultLanguage): ItemModel | EmptyItemModel {
        return this.getFactory(language).item.getModel(key);
    }

    randomItem(language = this.defaultLanguage): ItemModel {
        return this.getFactory(language).item.getRandomModel();
    }

    items(language = this.defaultLanguage): ItemModel[] {
        return this.getFactory(language).item.getAllModels();
    }

    addon(key: string | Addon, language = this.defaultLanguage): AddonModel | EmptyAddonModel {
        const addon = this.getFactory(language).survivorAddon.getModel(key);
        if (!addon.isEmpty) {
            return addon;
        }
        return this.getFactory(language).killerAddon.getModel(key);
    }

    survivorAddons(key?: string | ItemType, language = this.defaultLanguage): AddonModel[] {
        if (typeof key === "number") {
            return this.getFactory(language).survivorAddon.getModelsByType(key);
        }
        return this.getFactory(language).survivorAddon.getAllModels();
    }

    randomSurvivorAddon(language = this.defaultLanguage): AddonModel {
        return this.getFactory(language).survivorAddon.getRandomModel();
    }

    killerAddons(key?: string | Killer, language = this.defaultLanguage): AddonModel[] {
        if (typeof key === "number") {
            return this.getFactory(language).killerAddon.getModelsByOwner(key);
        }
        return this.getFactory(language).killerAddon.getAllModels();
    }

    randomKillerAddon(language = this.defaultLanguage): AddonModel {
        return this.getFactory(language).killerAddon.getRandomModel();
    }

    offering(
        key: string | Offering,
        language = this.defaultLanguage
    ): OfferingModel | EmptyOfferingModel {
        let offering = this.getFactory(language).survivorOffering.getModel(key);
        if (!offering.isEmpty) {
            return offering;
        }
        offering = this.getFactory(language).killerOffering.getModel(key);
        if (!offering.isEmpty) {
            return offering;
        }
        return this.getFactory(language).sharedOffering.getModel(key);
    }

    randomSharedOffering(language = this.defaultLanguage): OfferingModel {
        return this.getFactory(language).sharedOffering.getRandomModel();
    }

    survivorOfferings(language = this.defaultLanguage): OfferingModel[] {
        const sharedOfferings = this.getFactory(language).sharedOffering.getAllModels();
        const survivorOfferings = this.getFactory(language).survivorOffering.getAllModels();
        return { ...sharedOfferings, ...survivorOfferings };
    }

    randomSurvivorOffering(language = this.defaultLanguage): OfferingModel {
        return this.getFactory(language).survivorOffering.getRandomModel();
    }

    killerOfferings(language = this.defaultLanguage): OfferingModel[] {
        const sharedOfferings = this.getFactory(language).sharedOffering.getAllModels();
        const killerOfferings = this.getFactory(language).killerOffering.getAllModels();
        return { ...sharedOfferings, ...killerOfferings };
    }

    randomKillerOffering(language = this.defaultLanguage): OfferingModel {
        return this.getFactory(language).killerOffering.getRandomModel();
    }

    power(key: string | Power, language = this.defaultLanguage): PowerModel | EmptyPowerModel {
        return this.getFactory(language).power.getModel(key as string);
    }

    randomPower(language = this.defaultLanguage): PowerModel {
        return this.getFactory(language).power.getRandomModel();
    }

    powers(language = this.defaultLanguage): PowerModel[] {
        return this.getFactory(language).power.getAllModels();
    }

    perk(key: string | Perk, language = this.defaultLanguage): PerkModel | EmptyPerkModel {
        const perk = this.getFactory(language).survivorPerk.getModel(key);
        if (!perk.isEmpty) {
            return perk;
        }
        return this.getFactory(language).killerPerk.getModel(key);
    }

    randomKillerPerk(language = this.defaultLanguage): PerkModel {
        return this.getFactory(language).killerPerk.getRandomModel();
    }

    randomSurvivorPerk(language = this.defaultLanguage): PerkModel {
        return this.getFactory(language).survivorPerk.getRandomModel();
    }

    killerPerks(key?: string | Killer, language = this.defaultLanguage): PerkModel[] {
        if (typeof key === "string") {
            return this.getFactory(language).killerPerk.getModelsByOwner(key);
        }
        return this.getFactory(language).killerPerk.getAllModels();
    }

    survivorPerks(key?: string | Survivor, language = this.defaultLanguage): PerkModel[] {
        if (typeof key === "string") {
            return this.getFactory(language).survivorPerk.getModelsByOwner(key);
        }
        return this.getFactory(language).survivorPerk.getAllModels();
    }

    survivor(
        key: string | Survivor,
        language = this.defaultLanguage
    ): PlayerModel | EmptyPlayerModel {
        return this.getFactory(language).survivor.getModel(key);
    }

    randomSurvivor(language = this.defaultLanguage): PlayerModel {
        return this.getFactory(language).survivor.getRandomModel();
    }

    survivors(language = this.defaultLanguage): PlayerModel[] {
        return this.getFactory(language).survivor.getAllModels();
    }

    killer(key: string | Killer, language = this.defaultLanguage): PlayerModel | EmptyPlayerModel {
        return this.getFactory(language).killer.getModel(key);
    }

    randomKiller(language = this.defaultLanguage): PlayerModel {
        return this.getFactory(language).killer.getRandomModel();
    }

    killers(language = this.defaultLanguage): PlayerModel[] {
        return this.getFactory(language).killer.getAllModels();
    }
}

export default Dbd;
