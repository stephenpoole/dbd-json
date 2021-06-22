import items = require("../data.compiled/fr/items.json");
import killerAddons = require("../data.compiled/fr/killerAddons.json");
import killerOfferings = require("../data.compiled/fr/killerOfferings.json");
import killerPerks = require("../data.compiled/fr/killerPerks.json");
import killers = require("../data.compiled/fr/killers.json");
import powers = require("../data.compiled/fr/powers.json");
import sharedOfferings = require("../data.compiled/fr/sharedOfferings.json");
import survivorAddons = require("../data.compiled/fr/survivorAddons.json");
import survivorOfferings = require("../data.compiled/fr/survivorOfferings.json");
import survivorPerks = require("../data.compiled/fr/survivorPerks.json");
import survivors = require("../data.compiled/fr/survivors.json");
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.French;
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
