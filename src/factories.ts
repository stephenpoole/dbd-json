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

class Factories {
    item!: ItemFactory;
    killerAddon!: KillerAddonFactory;
    killer!: KillerFactory;
    killerOffering!: KillerOfferingFactory;
    killerPerk!: KillerPerkFactory;
    power!: PowerFactory;
    sharedOffering!: SharedOfferingFactory;
    survivorAddon!: SurvivorAddonFactory;
    survivor!: SurvivorFactory;
    survivorOffering!: SurvivorOfferingFactory;
    survivorPerk!: SurvivorPerkFactory;
    locale!: Locale;

    constructor(locale: Locale) {
        this.setLocale(locale);
    }

    setLocale(locale: Locale): void {
        const language = this.locale ? this.locale.language : undefined;
        if (locale.language !== language) {
            this.item = new ItemFactory(locale.data.items, this);
            this.killerAddon = new KillerAddonFactory(locale.data.killerAddons, this);
            this.killer = new KillerFactory(locale.data.killers, this);
            this.killerOffering = new KillerOfferingFactory(locale.data.killerOfferings, this);
            this.killerPerk = new KillerPerkFactory(locale.data.killerPerks, this);
            this.power = new PowerFactory(locale.data.powers, this);
            this.sharedOffering = new SharedOfferingFactory(locale.data.sharedOfferings, this);
            this.survivorAddon = new SurvivorAddonFactory(locale.data.survivorAddons, this);
            this.survivor = new SurvivorFactory(locale.data.survivors, this);
            this.survivorOffering = new SurvivorOfferingFactory(
                locale.data.survivorOfferings,
                this
            );
            this.survivorPerk = new SurvivorPerkFactory(locale.data.survivorPerks, this);
        }
    }
}

export default Factories;
