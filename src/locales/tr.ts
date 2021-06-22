import items = require("../data.compiled/tr/items.json");
import killerAddons = require("../data.compiled/tr/killerAddons.json");
import killerOfferings = require("../data.compiled/tr/killerOfferings.json");
import killerPerks = require("../data.compiled/tr/killerPerks.json");
import killers = require("../data.compiled/tr/killers.json");
import powers = require("../data.compiled/tr/powers.json");
import sharedOfferings = require("../data.compiled/tr/sharedOfferings.json");
import survivorAddons = require("../data.compiled/tr/survivorAddons.json");
import survivorOfferings = require("../data.compiled/tr/survivorOfferings.json");
import survivorPerks = require("../data.compiled/tr/survivorPerks.json");
import survivors = require("../data.compiled/tr/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Turkish;
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
