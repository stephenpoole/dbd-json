declare enum Amounts {
    Slightly = 0,
    Moderately = 1,
    Considerably = 2,
    Tremendously = 3
}
declare enum Player {
    Survivor = 0,
    Killer = 1,
    None = 2
}
declare enum Rarity {
    Common = 0,
    Uncommon = 1,
    Rare = 2,
    VeryRare = 3,
    UltraRare = 4,
    Event = 5
}
declare enum Difficulty {
    Easy = 0,
    Intermediate = 1,
    Hard = 2
}
declare enum ItemType {
    Empty = 0,
    Flashlight = 1,
    Key = 2,
    Map = 3,
    AidKit = 4,
    Toolbox = 5,
    Firecracker = 6
}
declare enum ModifierType {
    None = 0,
    Power = 1,
    Item = 2,
    Addon = 3,
    Offering = 4,
    Perk = 5,
    Player = 6,
    PlayerType = 7
}
declare enum Language {
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
declare enum Killer {
    NoOne = "NOONE",
    Trapper = "TRAPPER",
    Wraith = "WRAITH",
    Hillbilly = "HILLBILLY",
    Nurse = "NURSE",
    Huntress = "HUNTRESS",
    Shape = "SHAPE",
    Hag = "HAG",
    Cannibal = "CANNIBAL",
    Doctor = "DOCTOR",
    Nightmare = "NIGHTMARE",
    Pig = "PIG",
    Clown = "CLOWN",
    Spirit = "SPIRIT",
    Legion = "LEGION",
    Plague = "PLAGUE",
    Ghost = "GHOST",
    Demogorgon = "DEMOGORGON",
    Oni = "ONI",
    Deathslinger = "DEATHSLINGER",
    Executioner = "EXECUTIONER",
    Blight = "BLIGHT",
    Twins = "TWINS",
    Trickster = "TRICKSTER",
    Nemesis = "NEMESIS"
}
declare enum Survivor {
    NoOne = "NOONE",
    Dwight = "DWIGHT_FAIRFIELD",
    Meg = "MEG_THOMAS",
    Claudette = "CLAUDETTE_MOREL",
    Jake = "JAKE_PARK",
    Nea = "NEA_KARLSSON",
    Bill = "WILLIAM_OVERBECK",
    David = "DAVID_KING",
    Laurie = "LAURIE_STRODE",
    Ace = "ACE_VISCONTI",
    Feng = "FENG_MIN",
    Quentin = "QUENTIN_SMITH",
    Tapp = "DAVID_TAPP",
    Kate = "KATE_DENSON",
    Adam = "ADAM_FRANCIS",
    Jeff = "JEFF_JOHANSEN",
    Jane = "JANE_ROMERO",
    Ash = "ASHLEY_J_WILLIAMS",
    Nancy = "NANCY_WHEELER",
    Steve = "STEVE_HARRINGTON",
    Yui = "YUI_KIMURA",
    Zarina = "ZARINA_KASSIR",
    Cheryl = "CHERYL_MASON",
    Felix = "FELIX_RICHTER",
    Elodie = "ELODIE_RAKOTO",
    YunJin = "YUN_JIN_LEE",
    Jill = "JILL_VALENTINE",
    Leon = "LEON_SCOTT_KENNEDY"
}
export { Amounts, Player, Rarity, Difficulty, ItemType, ModifierType, Language, Killer, Survivor };
