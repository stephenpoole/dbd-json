import items from "../../data.compiled/locales/zh/items.json";
import killerAddons from "../../data.compiled/locales/zh/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/zh/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/zh/killerPerks.json";
import killers from "../../data.compiled/locales/zh/killers.json";
import powers from "../../data.compiled/locales/zh/powers.json";
import sharedOfferings from "../../data.compiled/locales/zh/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/zh/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/zh/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/zh/survivorPerks.json";
import survivors from "../../data.compiled/locales/zh/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Chinese;
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
