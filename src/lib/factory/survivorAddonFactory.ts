import { Addon } from "../types";
import AddonModel from "./model/addon";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { ItemType } from "../enum";

class SurvivorAddonFactory extends ModelFactory<AddonModel, Addon> {
    byType: { [key: string]: AddonModel[] } = {};

    constructor(data: Addon[], factories: Factories) {
        super(factories, AddonModel, data);
    }

    getModelsByType(key: ItemType): AddonModel[] {
        const itemExists = this.factories.item.typeExists(key);
        if (itemExists) {
            if (!(key in this.byType)) {
                const addons = this.data
                    .filter(addon => addon.type === key)
                    .map(addon => addon.index);
                this.byType[key] = this.getModels(addons);
            }
            return this.byType[key];
        }
        return [];
    }
}

export default SurvivorAddonFactory;
