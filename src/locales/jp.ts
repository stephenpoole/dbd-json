import items = require("../data.compiled/jp/items.json");
import killerAddons = require("../data.compiled/jp/killerAddons.json");
import killerOfferings = require("../data.compiled/jp/killerOfferings.json");
import killerPerks = require("../data.compiled/jp/killerPerks.json");
import killers = require("../data.compiled/jp/killers.json");
import powers = require("../data.compiled/jp/powers.json");
import sharedOfferings = require("../data.compiled/jp/sharedOfferings.json");
import survivorAddons = require("../data.compiled/jp/survivorAddons.json");
import survivorOfferings = require("../data.compiled/jp/survivorOfferings.json");
import survivorPerks = require("../data.compiled/jp/survivorPerks.json");
import survivors = require("../data.compiled/jp/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Japanese;
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
