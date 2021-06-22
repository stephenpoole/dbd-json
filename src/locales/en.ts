import items = require("../data.compiled/en/items.json");
import killerAddons = require("../data.compiled/en/killerAddons.json");
import killerOfferings = require("../data.compiled/en/killerOfferings.json");
import killerPerks = require("../data.compiled/en/killerPerks.json");
import killers = require("../data.compiled/en/killers.json");
import powers = require("../data.compiled/en/powers.json");
import sharedOfferings = require("../data.compiled/en/sharedOfferings.json");
import survivorAddons = require("../data.compiled/en/survivorAddons.json");
import survivorOfferings = require("../data.compiled/en/survivorOfferings.json");
import survivorPerks = require("../data.compiled/en/survivorPerks.json");
import survivors = require("../data.compiled/en/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.English;
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
