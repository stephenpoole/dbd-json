import { ItemType, Language, Rarity } from "./enum";
interface BaseEntity {
    id: number;
    index: string;
    name: string;
    description: string;
    image: string;
}
interface Item extends BaseEntity {
    type: ItemType;
    rarity: Rarity;
    flavor?: string;
}
interface Addon extends BaseEntity {
    owner?: string;
    rarity: Rarity;
    flavor?: string;
    type?: ItemType;
}
interface Offering extends BaseEntity {
    flavor?: string;
    rarity: Rarity;
}
interface Perk extends BaseEntity {
    owner: string;
    flavor?: string;
    rarity: Rarity[];
    tiers: (string | number)[][];
}
interface Player extends BaseEntity {
    power?: string;
    perks: string[];
}
interface Power extends BaseEntity {
    owner: string;
    flavor?: string;
}
interface LocaleData {
    items: Item[];
    killerAddons: Addon[];
    killerOfferings: Offering[];
    killerPerks: Perk[];
    killers: Player[];
    powers: Power[];
    sharedOfferings: Offering[];
    survivorAddons: Addon[];
    survivorPerks: Perk[];
    survivorOfferings: Offering[];
    survivors: Player[];
    language: Language;
}
interface DbdOptions {
    language?: Language;
}
export { BaseEntity, Item, Addon, Offering, Perk, Player, Power, LocaleData, DbdOptions };
