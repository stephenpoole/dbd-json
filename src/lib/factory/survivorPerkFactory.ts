import { Perk } from "../types";
import PerkModel from "./model/perk";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { Survivor } from "../../data.compiled/enum";

class SurvivorPerkFactory extends ModelFactory<PerkModel, Perk> {
    byOwner: { [key: string]: PerkModel[] } = {};

    constructor(data: Perk[], factories: Factories) {
        super(factories, PerkModel, data);
    }

    getModelsByOwner(key: string): PerkModel[] {
        const ownerExists = key === Survivor.NoOne || this.factories.killer.exists(key);
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
}

export default SurvivorPerkFactory;
