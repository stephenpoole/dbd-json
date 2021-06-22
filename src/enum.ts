enum Amounts {
    Slightly,
    Moderately,
    Considerably,
    Tremendously,
}

enum Player {
    Survivor,
    Killer,
    None,
}

enum Rarity {
    Common,
    Uncommon,
    Rare,
    VeryRare,
    UltraRare,
    Event,
}

enum Difficulty {
    Easy,
    Intermediate,
    Hard,
}

enum ItemType {
    Empty,
    Flashlight,
    Key,
    Map,
    AidKit,
    Toolbox,
    Firecracker,
}

enum ModifierType {
    None,
    Power,
    Item,
    Addon,
    Offering,
    Perk,
    Player,
    PlayerType,
}

enum Language {
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

enum Killer {
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
    Nemesis = "NEMESIS",
}

enum Survivor {
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
    Leon = "LEON_SCOTT_KENNEDY",
}

export { Amounts, Player, Rarity, Difficulty, ItemType, ModifierType, Language, Killer, Survivor };
