import items = require("../data.compiled/es/items.json");
import killerAddons = require("../data.compiled/es/killerAddons.json");
import killerOfferings = require("../data.compiled/es/killerOfferings.json");
import killerPerks = require("../data.compiled/es/killerPerks.json");
import killers = require("../data.compiled/es/killers.json");
import powers = require("../data.compiled/es/powers.json");
import sharedOfferings = require("../data.compiled/es/sharedOfferings.json");
import survivorAddons = require("../data.compiled/es/survivorAddons.json");
import survivorOfferings = require("../data.compiled/es/survivorOfferings.json");
import survivorPerks = require("../data.compiled/es/survivorPerks.json");
import survivors = require("../data.compiled/es/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Spanish;
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
