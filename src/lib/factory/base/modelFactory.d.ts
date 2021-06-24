import Factories from "../../factories";
import { BaseEntity } from "../../types";
import Factory from "./factory";
import Model from "./model";
declare type ModelParamSignature<C extends Model<T>, T extends BaseEntity> = new (factories: Factories, data?: T) => C;
declare class ModelFactory<C extends Model<T>, T extends BaseEntity> extends Factory<T> {
    model: ModelParamSignature<C, T>;
    factories: Factories;
    instances: C[];
    constructor(factories: Factories, model: ModelParamSignature<C, T>, data: T[]);
    getModel(key: string): C;
    getModels(keys: string[]): C[];
    getAllModels(): C[];
}
export default ModelFactory;
