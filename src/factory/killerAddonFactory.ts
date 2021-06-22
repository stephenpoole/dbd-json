import { Addon } from "../types";
import AddonModel from "./model/addon";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { Rarity } from "../enum";

class KillerAddonFactory extends ModelFactory<AddonModel, Addon> {
    byOwner: { [key: string]: AddonModel[] } = {};
    byRarity: { [key: string]: AddonModel[] } = {};

    constructor(data: Addon[], factories: Factories) {
        super(factories, AddonModel, data);
    }

    getModelsByOwner(key: string): AddonModel[] {
        const ownerExists = this.factories.killer.exists(key);
        if (ownerExists) {
            if (!(key in this.byOwner)) {
                const addons = this.data
                    .filter(addon => addon.owner === key)
                    .map(addon => addon.index);
                this.byOwner[key] = this.getModels(addons);
            }
            return this.byOwner[key];
        }
        return [];
    }

    getModelsByRarity(key: Rarity): AddonModel[] {
        if (!(key in this.byRarity)) {
            const addons = this.data
                .filter(addon => addon.rarity === key)
                .map(addon => addon.index);
            this.byRarity[key] = this.getModels(addons);
        }
        return this.byRarity[key];
    }
}

export default KillerAddonFactory;