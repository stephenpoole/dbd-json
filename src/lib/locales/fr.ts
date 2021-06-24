import items from "../../data.compiled/locales/fr/items.json";
import killerAddons from "../../data.compiled/locales/fr/killerAddons.json";
import killerOfferings from "../../data.compiled/locales/fr/killerOfferings.json";
import killerPerks from "../../data.compiled/locales/fr/killerPerks.json";
import killers from "../../data.compiled/locales/fr/killers.json";
import powers from "../../data.compiled/locales/fr/powers.json";
import sharedOfferings from "../../data.compiled/locales/fr/sharedOfferings.json";
import survivorAddons from "../../data.compiled/locales/fr/survivorAddons.json";
import survivorOfferings from "../../data.compiled/locales/fr/survivorOfferings.json";
import survivorPerks from "../../data.compiled/locales/fr/survivorPerks.json";
import survivors from "../../data.compiled/locales/fr/survivors.json";
import { Language } from "../enum";
import { LocaleData } from "../types";

const language = Language.French;
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
