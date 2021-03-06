import { ItemType } from "./enum";
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
    locale!: Locale;
    factory!: Factories;

    constructor(data: LocaleData) {
        this.locale = new Locale(data);
        this.factory = new Factories(this.locale);
    }

    item(key: string | Item): ItemModel | EmptyItemModel {
        return this.factory.item.getModel(key);
    }

    randomItem(): ItemModel {
        return this.factory.item.getRandomModel();
    }

    items(): ItemModel[] {
        return this.factory.item.getAllModels();
    }

    addon(key: string | Addon): AddonModel | EmptyAddonModel {
        const addon = this.factory.survivorAddon.getModel(key);
        if (!addon.isEmpty) {
            return addon;
        }
        return this.factory.killerAddon.getModel(key);
    }

    survivorAddons(key?: string | ItemType): AddonModel[] {
        if (typeof key === "number") {
            return this.factory.survivorAddon.getModelsByType(key);
        }
        return this.factory.survivorAddon.getAllModels();
    }

    randomSurvivorAddon(): AddonModel {
        return this.factory.survivorAddon.getRandomModel();
    }

    killerAddons(key?: string | Killer): AddonModel[] {
        if (typeof key === "number") {
            return this.factory.killerAddon.getModelsByOwner(key);
        }
        return this.factory.killerAddon.getAllModels();
    }

    randomKillerAddon(): AddonModel {
        return this.factory.killerAddon.getRandomModel();
    }

    offering(key: string | Offering): OfferingModel | EmptyOfferingModel {
        let offering = this.factory.survivorOffering.getModel(key);
        if (!offering.isEmpty) {
            return offering;
        }
        offering = this.factory.killerOffering.getModel(key);
        if (!offering.isEmpty) {
            return offering;
        }
        return this.factory.sharedOffering.getModel(key);
    }

    randomSharedOffering(): OfferingModel {
        return this.factory.sharedOffering.getRandomModel();
    }

    survivorOfferings(): OfferingModel[] {
        const sharedOfferings = this.factory.sharedOffering.getAllModels();
        const survivorOfferings = this.factory.survivorOffering.getAllModels();
        return { ...sharedOfferings, ...survivorOfferings };
    }

    randomSurvivorOffering(): OfferingModel {
        return this.factory.survivorOffering.getRandomModel();
    }

    killerOfferings(): OfferingModel[] {
        const sharedOfferings = this.factory.sharedOffering.getAllModels();
        const killerOfferings = this.factory.killerOffering.getAllModels();
        return { ...sharedOfferings, ...killerOfferings };
    }

    randomKillerOffering(): OfferingModel {
        return this.factory.killerOffering.getRandomModel();
    }

    power(key: string | Power): PowerModel | EmptyPowerModel {
        return this.factory.power.getModel(key as string);
    }

    randomPower(): PowerModel {
        return this.factory.power.getRandomModel();
    }

    powers(): PowerModel[] {
        return this.factory.power.getAllModels();
    }

    perk(key: string | Perk): PerkModel | EmptyPerkModel {
        const perk = this.factory.survivorPerk.getModel(key);
        if (!perk.isEmpty) {
            return perk;
        }
        return this.factory.killerPerk.getModel(key);
    }

    randomKillerPerk(): PerkModel {
        return this.factory.killerPerk.getRandomModel();
    }

    randomSurvivorPerk(): PerkModel {
        return this.factory.survivorPerk.getRandomModel();
    }

    killerPerks(key?: string | Killer): PerkModel[] {
        if (typeof key === "string") {
            return this.factory.killerPerk.getModelsByOwner(key);
        }
        return this.factory.killerPerk.getAllModels();
    }

    survivorPerks(key?: string | Survivor): PerkModel[] {
        if (typeof key === "string") {
            return this.factory.survivorPerk.getModelsByOwner(key);
        }
        return this.factory.survivorPerk.getAllModels();
    }

    survivor(key: string | Survivor): PlayerModel | EmptyPlayerModel {
        return this.factory.survivor.getModel(key);
    }

    randomSurvivor(): PlayerModel {
        return this.factory.survivor.getRandomModel();
    }

    survivors(): PlayerModel[] {
        return this.factory.survivor.getAllModels();
    }

    killer(key: string | Killer): PlayerModel | EmptyPlayerModel {
        return this.factory.killer.getModel(key);
    }

    randomKiller(): PlayerModel {
        return this.factory.killer.getRandomModel();
    }

    killers(): PlayerModel[] {
        return this.factory.killer.getAllModels();
    }
}

export default Dbd;
