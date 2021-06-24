declare const enum Player {
    Survivor = 0,
    Killer = 1,
    None = 2
}
declare const enum Rarity {
    Common = 0,
    Uncommon = 1,
    Rare = 2,
    VeryRare = 3,
    UltraRare = 4,
    Event = 5
}
declare const enum Difficulty {
    Easy = 0,
    Intermediate = 1,
    Hard = 2
}
declare const enum ItemType {
    Empty = 0,
    Flashlight = 1,
    Key = 2,
    Map = 3,
    AidKit = 4,
    Toolbox = 5,
    Firecracker = 6
}
declare const enum ModifierType {
    None = 0,
    Power = 1,
    Item = 2,
    Addon = 3,
    Offering = 4,
    Perk = 5,
    Player = 6,
    PlayerType = 7
}
declare const enum Language {
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
    Chinese = "zh"
}
declare const enum LocaleFileName {
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
    Survivors = "survivors"
}
export { Player, Rarity, Difficulty, ItemType, ModifierType, Language, LocaleFileName };
