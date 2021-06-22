import items = require("../data.compiled/it/items.json");
import killerAddons = require("../data.compiled/it/killerAddons.json");
import killerOfferings = require("../data.compiled/it/killerOfferings.json");
import killerPerks = require("../data.compiled/it/killerPerks.json");
import killers = require("../data.compiled/it/killers.json");
import powers = require("../data.compiled/it/powers.json");
import sharedOfferings = require("../data.compiled/it/sharedOfferings.json");
import survivorAddons = require("../data.compiled/it/survivorAddons.json");
import survivorOfferings = require("../data.compiled/it/survivorOfferings.json");
import survivorPerks = require("../data.compiled/it/survivorPerks.json");
import survivors = require("../data.compiled/it/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Italian;
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
