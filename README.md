# deadbydaylight

[![npm version](https://badge.fury.io/js/%40stephenpoole%2Fdeadbydaylight.svg)](https://badge.fury.io/js/%40stephenpoole%2Fdeadbydaylight)
[![Known Vulnerabilities](https://snyk.io/test/github/stephenpoole/deadbydaylight/badge.svg)](https://snyk.io/test/github/stephenpoole/deadbydaylight)
[![Build Status](https://travis-ci.com/stephenpoole/deadbydaylight.svg?branch=master)](https://travis-ci.com/stephenpoole/deadbydaylight)
[![codecov](https://codecov.io/gh/stephenpoole/deadbydaylight/branch/master/graph/badge.svg?token=lTWudhhmb0)](https://codecov.io/gh/stephenpoole/deadbydaylight)
![last commit](https://img.shields.io/github/last-commit/stephenpoole/deadbydaylight)
![issues](https://img.shields.io/github/issues/stephenpoole/deadbydaylight)

A complete Dead by Daylight dataset.

## Getting Started

Install `deadbydaylight` and save to your package.json in one easy step.

With npm:

```bash
npm install @stephenpoole/deadbydaylight
```

With yarn:

```bash
yarn add @stephenpoole/deadbydaylight
```

## Usage

In the browser globally

1. Insert the script tag in your html head:

```html
<script src="https://cdn.jsdelivr.net/npm/@stephenpoole/deadbydaylight/en/deadbydaylight.js"></script>
```

2. Instantiate and grab some data:

```javascript
(async () => {
    const { Language, Killer } = DeadByDaylight;
    const dbd = DeadByDaylight.Client();
    const nurse = dbd.killer(Killer.Nurse);
    console.log(nurse);
})();
```

In the browser with webpack

1. Import `deadbydaylight` into your application:

```javascript
import Dbd from "@stephenpoole/deadbydaylight";
```

2. Instantiate and grab some data:

```javascript
import Dbd, { Language, Killer } from "@stephenpoole/deadbydaylight";

(async () => {
    const dbd = Dbd();
    const nurse = dbd.killer(Killer.Nurse);
    console.log(nurse);
})();
```

In a Node environment

Refer to the [deadbydaylight.node repository](https://github.com/stephenpoole/deadbydaylight.node) for instructions regarding Node.

## Documentation

You'll find the type documentation here:
[Documentation](https://stephenpoole.github.io/deadbydaylight)

## Images

You'll find the images referenced by the `image` property on your computer at `C:\Program Files (x86)\Steam\steamapps\common\Dead by Daylight\DeadByDaylight\Icons\UI`.

## HTML

Throughout the data, html is used to denote styling of the descriptions.

```html
<span class=\"Highlight1\"></span>
```

The classes used are `Highlight1`, `Highlight2`, `Highlight3` and `Highlight4`

## Locales

Just like in-game, this library supports the following languages:

English (en), Spanish (es), German (de), French (fr), Italian (it), Japanese (jp), Korean (ko), Polish (pl), Russian (ru), Taiwanese (th), Turkish (tr and Simplified Chinese (zh).

To set the locale

In the browser with webpack:

```
import Dbd, { Language } from '@stephenpoole/deadbydaylight/ko';
```

In a Node environment:

Refer to the [deadbydaylight.node repository](https://github.com/stephenpoole/deadbydaylight.node) for instructions regarding Node.

In the browser globally:

```html
<script src="https://cdn.jsdelivr.net/npm/@stephenpoole/deadbydaylight/ko/deadbydaylight.js"></script>
```

## Data

### Killers

```javascript
{
        id: 1, (number, required)
        index: "SHAPE", (string, required)
        name: "The Shape", (string, required)
        difficulty: 2, (number, required, of type Difficulty)
        power: "EVIL_WITHIN", (string, required, of type powers[].index)
        description:
            "A haunting Killer, intent on monitoring survivors from a distance to feed his power, %bEvil Within%/b. The more he stalks, the stronger and faster he becomes.", (string, required)
        perks: [
            "SAVE_THE_BEST_FOR_LAST", (string, of type killerPerks[].index)
            ...
        ], (array, required, of length 3)
        image: "SH_charSelect_portrait" (string, required)
    }
```

### Survivors

```javascript
{
        id: 1, (number, required)
        index: "NEA_KARLSSON", (string, required)
        name: "Nea Karlsson", (string, required)
        difficulty: 1, (number, required, of type Difficulty)
        description:
            "An urban artist, able to easily escape and hide.", (string, required)
        perks: [
            "BALANCED_LANDING", (string, of type survivorPerks[].index)
            ...
        ], (array, required, of length 3)
        image: "NK_charSelect_portrait" (string, required)
    }
```

### Powers

```javascript
{
    id: 1, (number, required)
    index: "EVIL_WITHIN", (string, required)
    name: "Evil Within", (string, required)
    owner: "SHAPE", (string, required, of type killers[].index or "NOONE")
    description:
        "The darkness inside feeds his determination to take the life of...", (string, required)
    flavor:
        "\"I met him, fifteen years ago; I was told there was nothing left...", (string, optional)
    ], (array, required, at least length 1)
    image: "iconPowers_stalker1" (string, required)
}
```

### Items

```javascript
{
    id: 1, (number, required)
    index: "ENGINEERS_TOOLBOX", (string, required)
    name: "Mechanic's Toolbox", (string, required)
    description: "A metal box with specialised mechanics tools. Even without training...", (string, required)
    type: "TOOLBOX", (string, required, of type ItemType)
    rarity: 2, (number, required, of type Rarity)
    image: "iconItems_toolboxMechanics" (string, required)
}
```

### Perks

Killer Perks

```javascript
{
    id: 1, (number, required)
    index: "IRON_GRASP", (string, required)
    name: "Iron Grasp", (string, required)
    rarity: [
        1, (number)
        ...
    ], (array, required, of length 3)
    owner: "NOONE", (string, required, of type killers[].index or "NOONE")
    description:
        "Your powerful hold on the survivors causes escapes to be nearly impossible. Effects of survivor struggling are reduced by %s. Time to struggle out of your grasp is increased by %s.", (string, required)
    image: "iconPerks_ironGrasp", (string, required)
    flavor:
        "\"I met him, fifteen years ago; I was told there was nothing left...", (string, optional)
    tiers: [
        [
            "25%", (string or number)
            ...
        ], (array, of length count of {0} in description)
        ...
    ] (array, required, of length 3)
}
```

Survivor Perks

```javascript
{
    id: 1, (number, required)
    index: "SLIPPERY_MEAT", (string, required)
    name: "Slippery Meat", (string, required)
    rarity: [
        1, (number)
        ...
    ], (array, required, of length 3)
    owner: "NOONE", (string, required, of type survivors[].index or "NOONE")
    description:
        "You have developed an efficient way to get out of Bear Traps and Hooks. Grants up to %s extra escape attempts on the hook. The odds of freeing yourself from Bear Traps are increased by %s.", (string, required)
    image: "iconPerks_slipperyMeat", (string, required)
    flavor:
        "\"I met him, fifteen years ago; I was told there was nothing left...", (string, optional)
    tiers: [
        [
            "1%", (string or number)
            ...
        ], (array, of length count of {0} in description)
    ] (array, required, of length 3)
}
```

### Addons

Killer Addons

```javascript
{
    id: 1, (number, required)
    index: "VHS_PORN", (string, required)
    name: "VHS Porn", (string, required)
    owner: "CLOWN", (string, required, of type killers[].index)
    description: "An all time classic.", (string, required)
    rarity: 2, (number, required, of type Rarity)
    flavor: "\"I met him, fifteen years ago; I was told there was nothing left...", (string, optional)
    image: "iconAddon_toolboxMechanics" (string, required)
}
```

Survivor Addons

```javascript
{
    id: 1, (number, required)
    index: "CLEAN_RAG", (string, required)
    name: "Clean Rag", (string, required)
    type: "TOOLBOX", (string, required, of type items[].index)
    description: "A mundane rag. Suspiciously clean.", (string, required)
    rarity: 0, (number, required, of type Rarity)
    flavor: "\"I met him, fifteen years ago; I was told there was nothing left...", (string, optional)
    image: "iconAddon_cleanRag" (string, required)
}
```

### Offerings

Killer Offerings

```javascript
{
    id: 1, (number, required)
    index: "HOLLOW_SHELL", (string, required)
    name: "Hollow Shell", (string, required)
    rarity: 1, (number, required, of type Rarity)
    description: "Grants %b25%/b% extra Bloodpoints in all Categories.", (string, required)
    flavor:
        "\"An unidentifiable cocoon which was breached by whatever was inside.\"", (string, optional)
    image: "iconFavors_hollowShell" (string, required)
}
```

Survivor Offerings

```javascript
{
    id: 1, (number, required)
    index: "PETRIFIED_OAK", (string, required)
    name: "Petrified Oak", (string, required)
    rarity: 3, (number, required, of type Rarity)
    description:
        "Calms The Entity and prevents %b1%/b Hook from appearing.", (string, required)
    flavor: "\"A deteriorating piece of petrified wood.\"", (string, optional)
    image: "iconFavors_petrifiedOak" (string, required)
}
```

Shared Offerings

```javascript
{
    id: 1, (number, required)
    index: "BLOODY_PARTY_STREAMERS", (string, required)
    name: "Bloody Party Streamers", (string, required)
    rarity: 2, (number, required, of type Rarity)
    description:
        "Grants %b100%/b% bonus Bloodpoints in all Categories for all Players.", (string, required)
    flavor:
        "\"A reminder of a bloody good time when people came together, but left screaming.\"",  (string, optional)
    image: "iconFavors_bloodyPartyStreamers" (string, required)
}
```

## License

MIT License

Copyright (c) 2021 Stephen Poole

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
