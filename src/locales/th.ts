import items = require("../data.compiled/th/items.json");
import killerAddons = require("../data.compiled/th/killerAddons.json");
import killerOfferings = require("../data.compiled/th/killerOfferings.json");
import killerPerks = require("../data.compiled/th/killerPerks.json");
import killers = require("../data.compiled/th/killers.json");
import powers = require("../data.compiled/th/powers.json");
import sharedOfferings = require("../data.compiled/th/sharedOfferings.json");
import survivorAddons = require("../data.compiled/th/survivorAddons.json");
import survivorOfferings = require("../data.compiled/th/survivorOfferings.json");
import survivorPerks = require("../data.compiled/th/survivorPerks.json");
import survivors = require("../data.compiled/th/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Taiwanese;
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
