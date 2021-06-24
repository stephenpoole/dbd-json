import items from "../../data.compiled/locales/pl/items.json";
import killerAddons from "../../data.compiled/locales/pl/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/pl/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/pl/killerPerks.json";
import killers from "../../data.compiled/locales/pl/killers.json";
import powers from "../../data.compiled/locales/pl/powers.json";
import sharedOfferings from "../../data.compiled/locales/pl/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/pl/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/pl/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/pl/survivorPerks.json";
import survivors from "../../data.compiled/locales/pl/survivors.json";
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
