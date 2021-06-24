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
import { de, en, es, fr, it, jp, ko, pl, ru, th, tr, zh } from "../lib/locales";
import Lib from "../lib";

const Client = (language?: Language): Lib => {
    switch (language) {
        case Language.Chinese:
            return new Lib(zh);
        case Language.French:
            return new Lib(fr);
        case Language.German:
            return new Lib(de);
        case Language.Italian:
            return new Lib(it);
        case Language.Japanese:
            return new Lib(jp);
        case Language.Korean:
            return new Lib(ko);
        case Language.Polish:
            return new Lib(pl);
        case Language.Russian:
            return new Lib(ru);
        case Language.Spanish:
            return new Lib(es);
        case Language.Taiwanese:
            return new Lib(th);
        case Language.Turkish:
            return new Lib(tr);
        default:
            return new Lib(en);
    }
};

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
