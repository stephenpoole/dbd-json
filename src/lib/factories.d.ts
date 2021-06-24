import ItemFactory from "./factory/itemFactory";
import KillerAddonFactory from "./factory/killerAddonFactory";
import KillerFactory from "./factory/killerFactory";
import KillerOfferingFactory from "./factory/killerOfferingFactory";
import KillerPerkFactory from "./factory/killerPerkFactory";
import PowerFactory from "./factory/powerFactory";
import SharedOfferingFactory from "./factory/sharedOfferingFactory";
import SurvivorAddonFactory from "./factory/survivorAddonFactory";
import SurvivorFactory from "./factory/survivorFactory";
import SurvivorOfferingFactory from "./factory/survivorOfferingFactory";
import SurvivorPerkFactory from "./factory/survivorPerkFactory";
import Locale from "./locale";
declare class Factories {
    item: ItemFactory;
    killerAddon: KillerAddonFactory;
    killer: KillerFactory;
    killerOffering: KillerOfferingFactory;
    killerPerk: KillerPerkFactory;
    power: PowerFactory;
    sharedOffering: SharedOfferingFactory;
    survivorAddon: SurvivorAddonFactory;
    survivor: SurvivorFactory;
    survivorOffering: SurvivorOfferingFactory;
    survivorPerk: SurvivorPerkFactory;
    locale: Locale;
    constructor(locale: Locale);
    setLocale(locale: Locale): void;
}
export default Factories;
