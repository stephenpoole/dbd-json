var Amounts = {
    SLIGHTLY: 1,
    MODERATELY: 2,
    CONSIDERABLY: 3,
    TREMENDOUSLY: 4
};

var PlayerTypes = {
    SURVIVOR: 1,
    KILLER: 2
};

var TypeNames = {
    1: 'SURVIVOR',
    2: 'KILLER'
};

var Rarities = {
    COMMON: 1,
    UNCOMMON: 2,
    RARE: 3,
    VERY_RARE: 4,
    ULTRA_RARE: 5
};

var Difficulties = {
    EASY: 1,
    INTERMEDIATE: 2,
    HARD: 3
};

var ItemTypes = {
    EMPTY: 'EMPTY',
    FLASHLIGHT: 'FLASHLIGHT',
    KEY: 'KEY',
    MAP: 'MAP',
    AID_KIT: 'AID_KIT',
    TOOLBOX: 'TOOLBOX',
    FIRECRACKER: 'FIRECRACKER'
};

var ModifierTypes = {
    NONE: -1,
    POWER: 1,
    ITEM: 2,
    ADDON: 3,
    OFFERING: 4,
    PERK: 5,
    PLAYER: 6,
    PLAYER_TYPE: 7
};

module.exports = {
    Amounts: Amounts,
    PlayerTypes: PlayerTypes,
    TypeNames: TypeNames,
    Rarities: Rarities,
    ItemTypes: ItemTypes,
    ModifierTypes: ModifierTypes,
    Difficulties: Difficulties
};
