import { Offering } from "../types";
import OfferingModel from "./model/offering";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";

class SurvivorOfferingFactory extends ModelFactory<OfferingModel, Offering> {
    constructor(data: Offering[], factories: Factories) {
        super(factories, OfferingModel, data);
    }
}

export default SurvivorOfferingFactory;
