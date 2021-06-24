import {
    Player as PlayerType,
    Rarity,
    Difficulty,
    ItemType,
    ModifierType,
    Language,
} from "../src/lib/enum";
import {
    Killer,
    Power,
    Survivor,
    Item,
    Offering,
    SurvivorOffering,
    KillerOffering,
    Addon,
    KillerAddon,
    SurvivorAddon,
    Perk,
    KillerPerk,
    SurvivorPerk,
} from "../src/data.compiled/enum";
import {
    Addon as AddonModel,
    Item as ItemModel,
    Offering as OfferingModel,
    Perk as PerkModel,
    Player as PlayerModel,
    Power as PowerModel,
} from "../src/lib/factory/model";
import { Player, LocaleData } from "../src/lib/types";
import Lib from "../src/lib";
import it from "../src/lib/locales/it";

const Client = (): Lib => new Lib(it);
export { Client, AddonModel, ItemModel, OfferingModel, PerkModel, PlayerModel, PowerModel };
export {
    Killer,
    Power,
    Survivor,
    Item,
    Offering,
    SurvivorOffering,
    KillerOffering,
    Addon,
    KillerAddon,
    SurvivorAddon,
    Perk,
    KillerPerk,
    SurvivorPerk,
    PlayerType,
    Rarity,
    Difficulty,
    ItemType,
    ModifierType,
    Language,
};
export type { Player, LocaleData };
export default Client;
