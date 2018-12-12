![build](https://travis-ci.org/stephenpoole/dbd-json.svg?branch=master)

# dbd-json

A complete Dead by Daylight dataset in JSON.

## Getting Started

`npm install dbd-json`

```
import * as dbd from 'dbd-json';  

dbd.Killers.map(killer => console.log(killer.name));
console.log(dbd.Enum)
```

## Images

You may find the images used in-game at `Steam/common/steamapps/Dead By Daylight/DeadByDaylight/Icons/UI`.  
They are separated by type and each has it's own naming convention. The image strings stored in this repository are the unique values in each. You must account for this when making use of them in your project.

## Short tags

Throughout the data, short html-like codes are used to represent bolded and italicized text.  
`%b %/b`  
`%i %/i`

## Contributing

If you find an error or something is outdated, feel free to submit a pull request. Curating data by hand, it's bound to happen.

## Data

### Killers

`dbd.Killers`

```
{
        "id": 1, (number, required)  
        "index": "SHAPE", (string, required)  
        "name": "The Shape", (string, required) 
        "difficulty": "HARD", (string, required, of type Enum.Difficulties)
        "power": "EVIL_WITHIN", (string, required, of type Powers[].index)
        "description":
            "A haunting Killer, intent on monitoring Survivors from a distance to feed his power, %bEvil Within%/b. The more he stalks, the stronger and faster he becomes.", (string, required)
        "perks": [
            "SAVE_THE_BEST_FOR_LAST", (string, of type KillerPerks[].index)
            ...
        ], (array, required, of length 3)  
        "image": "SH" (string, required)  
    }
```

### Survivors

`dbd.Survivors`

```
{
        "id": 1, (number, required)  
        "index": "NEA_KARLSSON", (string, required)  
        "name": "Nea Karlsson", (string, required)  
        "difficulty": "INTERMEDIATE", (string, required, of type Enum.Difficulties)
        "description":
            "An urban artist, able to easily escape and hide.", (string, required)
        "perks": [
            "BALANCED_LANDING", (string, of type SurvivorPerks[].index)
            ...
        ], (array, required, of length 3)  
        "image": "NK" (string, required)  
    }
```

### Powers

`dbd.Powers`

```
{
    "id": 1, (number, required)  
    "index": "EVIL_WITHIN", (string, required)  
    "name": "Evil Within", (string, required)  
    "owner": "SHAPE", (string, required, of type Killers[].index or "ALL")
    "description":
        "The darkness inside feeds his determination to take the life of...", (string, required)  
    "flavor":
        "\"I met him, fifteen years ago; I was told there was nothing left...", (string, required)  
    "abilities": [
        "EVIL WITHIN I: %bTremendously Decreased Terror Radius%/b. Grants immunity to detection perks. Slightly decreased movement speed. Slightly decreased lunge.", (string)
        ...
    ], (array, required, at least length 1)  
    "image": "stalker1" (string, required)  
}
```

### Items

`dbd.Items`

```
{
    id: 1, (number, required)  
    index: "ENGINEERS_TOOLBOX", (string, required)  
    name: "Mechanic's Toolbox", (string, required)  
    description: "A metal box with specialised mechanics tools. Even without training...", (string, required)  
    abilities: [
        "%b80 Charges%/b", (string)  
        ...  
    ], (array, required, at least length 1)  
    type: "TOOLBOX", (string, required, of type Enum.ItemTypes)  
    rarity: "RARE", (string, required, of type Enum.Rarities)  
    image: "toolboxMechanics" (string, required)  
}
```

### Perks

`dbd.KillerPerks`

```
{
    "id": 1, (number, required)
    "index": "IRON_GRASP", (string, required)  
    "name": "Iron Grasp", (string, required)  
    "rarity": [
        "UNCOMMON", (string)
        ...
    ], (array, required, of length 3)  
    "owner": "ALL", (string, required, of type Killers[].index or "ALL")
    "description":
        "Your powerful hold on the Survivors causes escapes to be nearly impossible. Effects of survivor struggling are reduced by %s. Time to struggle out of your grasp is increased by %s.", (string, required)  
    "image": "ironGrasp", (string, required)
    "tiers": [
        [
            "25%", (string or number)
            ...
        ], (array, of length count of %s in description)
        ...
    ] (array, required, of length 3)
}
```

`dbd.SurvivorPerks`

```
{
    "id": 1, (number, required)
    "index": "SLIPPERY_MEAT", (string, required)  
    "name": "Slippery Meat", (string, required)  
    "rarity": [
        "UNCOMMON", (string)
        ...
    ], (array, required, of length 3)  
    "owner": "ALL", (string, required, of type Survivors[].index or "ALL")
    "description":
        "You have developed an efficient way to get out of Bear Traps and Hooks. Grants up to %s extra escape attempts on the hook. The odds of freeing yourself from Bear Traps are increased by %s.", (string, required)  
    "image": "slipperyMeat", (string, required)
    "tiers": [
        [
            "1%", (string or number)
            ...
        ], (array, of length count of %s in description)
    ] (array, required, of length 3)
}
```

### Addons

```
dbd.KillerAddons
```

```
{
    id: 1, (number, required)  
    index: "VHS_PORN", (string, required)  
    name: "VHS Porn", (string, required)  
    owner: "CLOWN", (string, required, of type Killers[].index)
    description: "An all time classic.", (string, required)  
    abilities: [
        "%bModerately%/b increases movement Speed while reloading The Afterpiece Tonic.", (string)
        ...  
    ], (array, required, at least length 1)  
    rarity: "RARE", (string, required, of type Enum.Rarities)  
    image: "toolboxMechanics" (string, required)  
}
```

```
dbd.SurvivorAddons
```

```
{
    id: 1, (number, required)  
    index: "CLEAN_RAG", (string, required)  
    name: "Clean Rag", (string, required)  
    type: "TOOLBOX", (string, required, of type Items[].index)
    description: "A mundane rag. Suspiciously clean.", (string, required)  
    abilities: [
        "%bSlightly increases%/b the Toolbox's repair speed.", (string)
        ...  
    ], (array, required, at least length 1)  
    rarity: "COMMON", (string, required, of type Enum.Rarities)  
    image: "cleanRag" (string, required)  
}
```

### Offerings

`dbd.KillerOfferings`

```
{
    "id": 1, (number, required)
    "index": "HOLLOW_SHELL", (string, required)  
    "name": "Hollow Shell", (string, required)
    "rarity": "UNCOMMON", (string, required, of type Enum.Rarities)  
    "description": "Grants %b25%/b% extra Bloodpoints in all Categories.", (string, required)  
    "abilities": [
        "Stacks" (string)
    ], (array, optional, at least length 1)  
    "flavor":
        "\"An unidentifiable cocoon which was breached by whatever was inside.\"", (string, optional)
    "image": "hollowShell" (string, required)
}
```

`dbd.SurvivorOfferings`

```
{
    "id": 1, (number, required)
    "index": "PETRIFIED_OAK", (string, required)  
    "name": "Petrified Oak", (string, required)
    "rarity": "VERY_RARE", (string, required, of type Enum.Rarities)  
    "description":
        "Calms The Entity and prevents %b1%/b Hook from appearing.", (string, required)
    "abilities": [
        "Stacks" (string)
    ], (array, optional, at least length 1)  
    "flavor": "\"A deteriorating piece of petrified wood.\"", (string, optional)
    "image": "petrifiedOak" (string, required)
}
```

`dbd.SharedOfferings`

```
{
        "id": 1, (number, required)
        "index": "BLOODY_PARTY_STREAMERS", (string, required)  
        "name": "Bloody Party Streamers", (string, required)
        "rarity": "RARE", (string, required, of type Enum.Rarities)  
        "description":
            "Grants %b100%/b% bonus Bloodpoints in all Categories for all Players.", (string, required)
        "abilities": [
            "Stacks" (string)
        ], (array, optional, at least length 1)  
        "flavor":
            "\"A reminder of a bloody good time when people came together, but left screaming.\"",  (string, optional)
        "image": "bloodyPartyStreamers" (string, required)
    }
```
