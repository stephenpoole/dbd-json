import items = require("../data.compiled/zh/items.json");
import killerAddons = require("../data.compiled/zh/killerAddons.json");
import killerOfferings = require("../data.compiled/zh/killerOfferings.json");
import killerPerks = require("../data.compiled/zh/killerPerks.json");
import killers = require("../data.compiled/zh/killers.json");
import powers = require("../data.compiled/zh/powers.json");
import sharedOfferings = require("../data.compiled/zh/sharedOfferings.json");
import survivorAddons = require("../data.compiled/zh/survivorAddons.json");
import survivorOfferings = require("../data.compiled/zh/survivorOfferings.json");
import survivorPerks = require("../data.compiled/zh/survivorPerks.json");
import survivors = require("../data.compiled/zh/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Chinese;
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
