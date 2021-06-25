const enum Player {
    Survivor,
    Killer,
    None,
}

const enum Rarity {
    Common,
    Uncommon,
    Rare,
    VeryRare,
    UltraRare,
    Event,
    None,
}

const enum Difficulty {
    Easy,
    Intermediate,
    Hard,
    None,
}

const enum ItemType {
    None,
    Flashlight,
    Key,
    Map,
    AidKit,
    Toolbox,
    Firecracker,
}

const enum ModifierType {
    None,
    Power,
    Item,
    Addon,
    Offering,
    Perk,
    Player,
    PlayerType,
}

const enum Language {
    English = "en",
    Spanish = "es",
    German = "de",
    French = "fr",
    Italian = "it",
    Japanese = "jp",
    Korean = "ko",
    Polish = "pl",
    Russian = "ru",
    Taiwanese = "th",
    Turkish = "tr",
    Chinese = "zh",
}

const enum LocaleFileName {
    Items = "items",
    KillerAddons = "killerAddons",
    KillerOfferings = "killerOfferings",
    KillerPerks = "killerPerks",
    Killers = "killers",
    Powers = "powers",
    SharedOfferings = "sharedOfferings",
    SurvivorAddons = "survivorAddons",
    SurvivorOfferings = "survivorOfferings",
    SurvivorPerks = "survivorPerks",
    Survivors = "survivors",
}

export { Player, Rarity, Difficulty, ItemType, ModifierType, Language, LocaleFileName };
