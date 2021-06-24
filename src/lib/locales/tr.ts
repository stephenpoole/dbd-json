import items from "../../data.compiled/locales/tr/items.json";
import killerAddons from "../../data.compiled/locales/tr/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/tr/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/tr/killerPerks.json";
import killers from "../../data.compiled/locales/tr/killers.json";
import powers from "../../data.compiled/locales/tr/powers.json";
import sharedOfferings from "../../data.compiled/locales/tr/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/tr/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/tr/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/tr/survivorPerks.json";
import survivors from "../../data.compiled/locales/tr/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Turkish;
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
