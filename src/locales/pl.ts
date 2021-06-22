import items = require("../data.compiled/pl/items.json");
import killerAddons = require("../data.compiled/pl/killerAddons.json");
import killerOfferings = require("../data.compiled/pl/killerOfferings.json");
import killerPerks = require("../data.compiled/pl/killerPerks.json");
import killers = require("../data.compiled/pl/killers.json");
import powers = require("../data.compiled/pl/powers.json");
import sharedOfferings = require("../data.compiled/pl/sharedOfferings.json");
import survivorAddons = require("../data.compiled/pl/survivorAddons.json");
import survivorOfferings = require("../data.compiled/pl/survivorOfferings.json");
import survivorPerks = require("../data.compiled/pl/survivorPerks.json");
import survivors = require("../data.compiled/pl/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Korean;
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
