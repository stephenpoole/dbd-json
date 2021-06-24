import items from "../../data.compiled/locales/jp/items.json";
import killerAddons from "../../data.compiled/locales/jp/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/jp/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/jp/killerPerks.json";
import killers from "../../data.compiled/locales/jp/killers.json";
import powers from "../../data.compiled/locales/jp/powers.json";
import sharedOfferings from "../../data.compiled/locales/jp/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/jp/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/jp/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/jp/survivorPerks.json";
import survivors from "../../data.compiled/locales/jp/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Japanese;
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
