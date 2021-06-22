import items = require("../data.compiled/ko/items.json");
import killerAddons = require("../data.compiled/ko/killerAddons.json");
import killerOfferings = require("../data.compiled/ko/killerOfferings.json");
import killerPerks = require("../data.compiled/ko/killerPerks.json");
import killers = require("../data.compiled/ko/killers.json");
import powers = require("../data.compiled/ko/powers.json");
import sharedOfferings = require("../data.compiled/ko/sharedOfferings.json");
import survivorAddons = require("../data.compiled/ko/survivorAddons.json");
import survivorOfferings = require("../data.compiled/ko/survivorOfferings.json");
import survivorPerks = require("../data.compiled/ko/survivorPerks.json");
import survivors = require("../data.compiled/ko/survivors.json");
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
