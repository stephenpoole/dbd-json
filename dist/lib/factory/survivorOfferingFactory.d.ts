import { Offering } from "../types";
import OfferingModel from "./model/offering";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
declare class SurvivorOfferingFactory extends ModelFactory<OfferingModel, Offering> {
    constructor(data: Offering[], factories: Factories);
}
export default SurvivorOfferingFactory;
