import items from "../../data.compiled/locales/en/items.json";
import killerAddons from "../../data.compiled/locales/en/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/en/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/en/killerPerks.json";
import killers from "../../data.compiled/locales/en/killers.json";
import powers from "../../data.compiled/locales/en/powers.json";
import sharedOfferings from "../../data.compiled/locales/en/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/en/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/en/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/en/survivorPerks.json";
import survivors from "../../data.compiled/locales/en/survivors.json";
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
