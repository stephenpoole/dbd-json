import {
    Player as PlayerType,
    Rarity,
    Difficulty,
    ItemType,
    ModifierType,
    Language,
} from "../lib/enum";
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
} from "../data.compiled/enum";
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
} from "../lib/factory/model";
import { Player, LocaleData } from "../lib/types";
import Lib from "../lib";
import it from "../lib/locales/it";

const Client = (): Lib => new Lib(it);
export {
    Client,
    AddonModel,
    ItemModel,
    OfferingModel,
    PerkModel,
    PlayerModel,
    PowerModel,
    EmptyAddonModel,
    EmptyItemModel,
    EmptyOfferingModel,
    EmptyPerkModel,
    EmptyPlayerModel,
    EmptyPowerModel,
};
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
