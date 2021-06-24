import items from "../../data.compiled/locales/es/items.json";
import killerAddons from "../../data.compiled/locales/es/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/es/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/es/killerPerks.json";
import killers from "../../data.compiled/locales/es/killers.json";
import powers from "../../data.compiled/locales/es/powers.json";
import sharedOfferings from "../../data.compiled/locales/es/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/es/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/es/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/es/survivorPerks.json";
import survivors from "../../data.compiled/locales/es/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Spanish;
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
