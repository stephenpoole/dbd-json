import { Addon } from "../types";
import AddonModel from "./model/addon";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { ItemType } from "../enum";
declare class SurvivorAddonFactory extends ModelFactory<AddonModel, Addon> {
    byType: {
        [key: string]: AddonModel[];
    };
    constructor(data: Addon[], factories: Factories);
    getModelsByType(key: ItemType): AddonModel[];
}
export default SurvivorAddonFactory;
