import { Perk } from "../types";
import PerkModel from "./model/perk";
import EmptyPerkModel from "./model/emptyPerk";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { Killer } from "../../data.compiled/enum";

class KillerPerkFactory extends ModelFactory<PerkModel, EmptyPerkModel, Perk> {
    byOwner: { [key: string]: PerkModel[] } = {};

    constructor(data: Perk[], factories: Factories) {
        super(factories, PerkModel, EmptyPerkModel, data);
    }

    getModelsByOwner(key: string): PerkModel[] {
        const ownerExists = key === Killer.NoOne || this.factories.killer.exists(key);
        if (ownerExists) {
            if (!(key in this.byOwner)) {
                const addons = this.data
                    .filter(addon => addon.owner === key)
                    .map(addon => addon.index);
                this.byOwner[key] = this.getModels(addons) as PerkModel[];
            }
            return this.byOwner[key];
        }
        return [];
    }
}

export default KillerPerkFactory;
