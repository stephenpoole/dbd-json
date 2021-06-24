import items from "../../data.compiled/locales/ru/items.json";
import killerAddons from "../../data.compiled/locales/ru/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/ru/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/ru/killerPerks.json";
import killers from "../../data.compiled/locales/ru/killers.json";
import powers from "../../data.compiled/locales/ru/powers.json";
import sharedOfferings from "../../data.compiled/locales/ru/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/ru/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/ru/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/ru/survivorPerks.json";
import survivors from "../../data.compiled/locales/ru/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Russian;
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
