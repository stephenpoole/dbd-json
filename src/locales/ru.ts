import items = require("../data.compiled/ru/items.json");
import killerAddons = require("../data.compiled/ru/killerAddons.json");
import killerOfferings = require("../data.compiled/ru/killerOfferings.json");
import killerPerks = require("../data.compiled/ru/killerPerks.json");
import killers = require("../data.compiled/ru/killers.json");
import powers = require("../data.compiled/ru/powers.json");
import sharedOfferings = require("../data.compiled/ru/sharedOfferings.json");
import survivorAddons = require("../data.compiled/ru/survivorAddons.json");
import survivorOfferings = require("../data.compiled/ru/survivorOfferings.json");
import survivorPerks = require("../data.compiled/ru/survivorPerks.json");
import survivors = require("../data.compiled/ru/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Russian;
const data: LocaleData = {
    items,
    killerAddons,
    killerOfferings,
    killerPerks,
    killers,
    powers,
    sharedOfferings,
    survivorAddons,
    survivorOfferings,
    survivorPerks,
    survivors,
    language,
};

export default data;
