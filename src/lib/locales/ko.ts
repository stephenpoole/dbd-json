import items from "../../data.compiled/locales/ko/items.json";
import killerAddons from "../../data.compiled/locales/ko/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/ko/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/ko/killerPerks.json";
import killers from "../../data.compiled/locales/ko/killers.json";
import powers from "../../data.compiled/locales/ko/powers.json";
import sharedOfferings from "../../data.compiled/locales/ko/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/ko/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/ko/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/ko/survivorPerks.json";
import survivors from "../../data.compiled/locales/ko/survivors.json";
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
