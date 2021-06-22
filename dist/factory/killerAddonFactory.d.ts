import { Addon } from "../types";
import AddonModel from "./model/addon";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { Rarity } from "../enum";
declare class KillerAddonFactory extends ModelFactory<AddonModel, Addon> {
    byOwner: {
        [key: string]: AddonModel[];
    };
    byRarity: {
        [key: string]: AddonModel[];
    };
    constructor(data: Addon[], factories: Factories);
    getModelsByOwner(key: string): AddonModel[];
    getModelsByRarity(key: Rarity): AddonModel[];
}
export default KillerAddonFactory;
