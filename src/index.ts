import {
    Amounts,
    Player as PlayerType,
    Rarity,
    Difficulty,
    ItemType,
    ModifierType,
    Language,
    Killer,
    Survivor,
} from "./enum";
import Factories from "./factories";
import {
    Addon as AddonModel,
    Item as ItemModel,
    Offering as OfferingModel,
    Perk as PerkModel,
    Player as PlayerModel,
    Power as PowerModel,
} from "./factory/model";
import Locale from "./locale";
import { Item, Addon, Offering, Perk, Player, Power, LocaleData } from "./types";

class Dbd {
    locale!: Locale;
    factory!: Factories;

    async setLanguage(language: Language): Promise<void> {
        this.locale = new Locale(language);
        this.factory = new Factories(this.locale);
    }

    item(key: string): ItemModel {
        return this.factory.item.getModel(key);
    }

    items(): ItemModel[] {
        return this.factory.item.getAllModels();
    }

    addon(key: string): AddonModel {
        const addon: AddonModel = this.factory.survivorAddon.getModel(key);
        if (!addon.isEmpty) {
            return addon;
        }
        return this.factory.killerAddon.getModel(key);
    }

    survivorAddons(key?: ItemType): AddonModel[] {
        if (typeof key === "number") {
            return this.factory.survivorAddon.getModelsByType(key);
        }
        return this.factory.survivorAddon.getAllModels();
    }

    killerAddons(key?: Killer): AddonModel[] {
        if (typeof key === "number") {
            return this.factory.killerAddon.getModelsByOwner(key);
        }
        return this.factory.killerAddon.getAllModels();
    }

    offering(key: string): OfferingModel {
        let offering: OfferingModel = this.factory.survivorOffering.getModel(key);
        if (offering) {
            return offering;
        }
        offering = this.factory.killerOffering.getModel(key);
        if (offering) {
            return offering;
        }
        return this.factory.sharedOffering.getModel(key);
    }

    survivorOfferings(): OfferingModel[] {
        const sharedOfferings = this.factory.sharedOffering.getAllModels();
        const survivorOfferings = this.factory.survivorOffering.getAllModels();
        return { ...sharedOfferings, ...survivorOfferings };
    }

    killerOfferings(): OfferingModel[] {
        const sharedOfferings = this.factory.sharedOffering.getAllModels();
        const killerOfferings = this.factory.killerOffering.getAllModels();
        return { ...sharedOfferings, ...killerOfferings };
    }

    power(key: string): PowerModel {
        return this.factory.power.getModel(key);
    }

    powers(): PowerModel[] {
        return this.factory.power.getAllModels();
    }

    perk(key: string): PerkModel {
        const perk: PerkModel = this.factory.survivorPerk.getModel(key);
        if (perk) {
            return perk;
        }
        return this.factory.killerPerk.getModel(key);
    }

    killerPerks(key?: Killer): PerkModel[] {
        if (typeof key === "string") {
            return this.factory.killerPerk.getModelsByOwner(key);
        }
        return this.factory.killerPerk.getAllModels();
    }

    survivorPerks(key?: Survivor): PerkModel[] {
        if (typeof key === "string") {
            return this.factory.survivorPerk.getModelsByOwner(key);
        }
        return this.factory.survivorPerk.getAllModels();
    }

    survivor(key: string): PlayerModel {
        return this.factory.survivor.getModel(key);
    }

    survivors(): PlayerModel[] {
        return this.factory.survivor.getAllModels();
    }

    killer(key: string): PlayerModel {
        return this.factory.killer.getModel(key);
    }

    killers(): PlayerModel[] {
        return this.factory.killer.getAllModels();
    }
}

export {
    Item,
    Addon,
    Offering,
    Perk,
    PlayerType,
    Power,
    Amounts,
    Player,
    Rarity,
    Difficulty,
    ItemType,
    ModifierType,
    Language,
    LocaleData,
    Killer,
    Survivor,
    AddonModel,
    ItemModel,
    OfferingModel,
    PerkModel,
    PlayerModel,
    PowerModel,
};
export default Dbd;
