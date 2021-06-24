import { Perk } from "../types";
import PerkModel from "./model/perk";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
declare class KillerPerkFactory extends ModelFactory<PerkModel, Perk> {
    byOwner: {
        [key: string]: PerkModel[];
    };
    constructor(data: Perk[], factories: Factories);
    getModelsByOwner(key: string): PerkModel[];
}
export default KillerPerkFactory;
