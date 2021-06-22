import items = require("../data.compiled/de/items.json");
import killerAddons = require("../data.compiled/de/killerAddons.json");
import killerOfferings = require("../data.compiled/de/killerOfferings.json");
import killerPerks = require("../data.compiled/de/killerPerks.json");
import killers = require("../data.compiled/de/killers.json");
import powers = require("../data.compiled/de/powers.json");
import sharedOfferings = require("../data.compiled/de/sharedOfferings.json");
import survivorAddons = require("../data.compiled/de/survivorAddons.json");
import survivorOfferings = require("../data.compiled/de/survivorOfferings.json");
import survivorPerks = require("../data.compiled/de/survivorPerks.json");
import survivors = require("../data.compiled/de/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.German;
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
