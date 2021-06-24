import { Offering } from "../types";
import OfferingModel from "./model/offering";
import EmptyOfferingModel from "./model/emptyOffering";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";

class SharedOfferingFactory extends ModelFactory<OfferingModel, EmptyOfferingModel, Offering> {
    constructor(data: Offering[], factories: Factories) {
        super(factories, OfferingModel, EmptyOfferingModel, data);
    }
}

export default SharedOfferingFactory;
