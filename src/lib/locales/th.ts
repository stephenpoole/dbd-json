import items from "../../data.compiled/locales/th/items.json";
import killerAddons from "../../data.compiled/locales/th/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/th/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/th/killerPerks.json";
import killers from "../../data.compiled/locales/th/killers.json";
import powers from "../../data.compiled/locales/th/powers.json";
import sharedOfferings from "../../data.compiled/locales/th/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/th/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/th/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/th/survivorPerks.json";
import survivors from "../../data.compiled/locales/th/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Taiwanese;
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
