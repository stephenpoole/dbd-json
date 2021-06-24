import items from "../../data.compiled/locales/de/items.json";
import killerAddons from "../../data.compiled/locales/de/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/de/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/de/killerPerks.json";
import killers from "../../data.compiled/locales/de/killers.json";
import powers from "../../data.compiled/locales/de/powers.json";
import sharedOfferings from "../../data.compiled/locales/de/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/de/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/de/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/de/survivorPerks.json";
import survivors from "../../data.compiled/locales/de/survivors.json";
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
