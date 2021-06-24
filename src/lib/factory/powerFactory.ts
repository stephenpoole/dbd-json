import { Power } from "../types";
import PowerModel from "./model/power";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";

class PowerFactory extends ModelFactory<PowerModel, Power> {
    constructor(data: Power[], factories: Factories) {
        super(factories, PowerModel, data);
    }
}

export default PowerFactory;
