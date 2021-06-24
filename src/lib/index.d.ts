import { ItemType } from "./enum";
import { Killer, Survivor, Power, Item, Addon, Offering, Perk } from "../data.compiled/enum";
import Factories from "./factories";
import { Addon as AddonModel, Item as ItemModel, Offering as OfferingModel, Perk as PerkModel, Player as PlayerModel, Power as PowerModel } from "./factory/model";
import Locale from "./locale";
import { LocaleData } from "./types";
declare class Dbd {
    locale: Locale;
    factory: Factories;
    constructor(data: LocaleData);
    item(key: Item): ItemModel;
    items(): ItemModel[];
    addon(key: Addon): AddonModel;
    survivorAddons(key?: ItemType): AddonModel[];
    killerAddons(key?: Killer): AddonModel[];
    offering(key: Offering): OfferingModel;
    survivorOfferings(): OfferingModel[];
    killerOfferings(): OfferingModel[];
    power(key: Power): PowerModel;
    powers(): PowerModel[];
    perk(key: Perk): PerkModel;
    killerPerks(key?: Killer): PerkModel[];
    survivorPerks(key?: Survivor): PerkModel[];
    survivor(key: Survivor): PlayerModel;
    survivors(): PlayerModel[];
    killer(key: Killer): PlayerModel;
    killers(): PlayerModel[];
}
export default Dbd;
