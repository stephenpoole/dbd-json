import items from "../../data.compiled/locales/it/items.json";
import killerAddons from "../../data.compiled/locales/it/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/it/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/it/killerPerks.json";
import killers from "../../data.compiled/locales/it/killers.json";
import powers from "../../data.compiled/locales/it/powers.json";
import sharedOfferings from "../../data.compiled/locales/it/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/it/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/it/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/it/survivorPerks.json";
import survivors from "../../data.compiled/locales/it/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.Italian;
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
