import { Amounts, Player as PlayerType, Rarity, Difficulty, ItemType, ModifierType, Language, Killer, Survivor } from "./enum";
import Factories from "./factories";
import { Addon as AddonModel, Item as ItemModel, Offering as OfferingModel, Perk as PerkModel, Player as PlayerModel, Power as PowerModel } from "./factory/model";
import Locale from "./locale";
import { Item, Addon, Offering, Perk, Player, Power, LocaleData } from "./types";
declare class Dbd {
    locale: Locale;
    factory: Factories;
    setLanguage(language: Language): Promise<void>;
    item(key: string): ItemModel;
    items(): ItemModel[];
    addon(key: string): AddonModel;
    survivorAddons(key?: ItemType): AddonModel[];
    killerAddons(key?: Killer): AddonModel[];
    offering(key: string): OfferingModel;
    survivorOfferings(): OfferingModel[];
    killerOfferings(): OfferingModel[];
    power(key: string): PowerModel;
    powers(): PowerModel[];
    perk(key: string): PerkModel;
    killerPerks(key?: Killer): PerkModel[];
    survivorPerks(key?: Survivor): PerkModel[];
    survivor(key: string): PlayerModel;
    survivors(): PlayerModel[];
    killer(key: string): PlayerModel;
    killers(): PlayerModel[];
}
export { Item, Addon, Offering, Perk, PlayerType, Power, Amounts, Player, Rarity, Difficulty, ItemType, ModifierType, Language, LocaleData, Killer, Survivor, AddonModel, ItemModel, OfferingModel, PerkModel, PlayerModel, PowerModel, };
export default Dbd;
