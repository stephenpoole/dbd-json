import { Power } from "../types";
import PowerModel from "./model/power";
import EmptyPowerModel from "./model/emptyPower";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";

class PowerFactory extends ModelFactory<PowerModel, EmptyPowerModel, Power> {
    constructor(data: Power[], factories: Factories) {
        super(factories, PowerModel, EmptyPowerModel, data);
    }
}

export default PowerFactory;
