import { Power } from "../types";
import PowerModel from "./model/power";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
declare class PowerFactory extends ModelFactory<PowerModel, Power> {
    constructor(data: Power[], factories: Factories);
}
export default PowerFactory;
