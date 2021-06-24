import Factories from "../../factories";
import { BaseEntity } from "../../types";
import Factory from "./factory";
import Model from "./model";

type ModelParamSignature<C extends Model<T>, D extends Model<T>, T extends BaseEntity> = new (
    factories: Factories,
    data?: T
) => C | D;

class ModelFactory<
    C extends Model<T>,
    D extends Model<T>,
    T extends BaseEntity
> extends Factory<T> {
    model: ModelParamSignature<C, D, T>;
    emptyModel: ModelParamSignature<C, D, T>;
    factories: Factories;
    instances: (C | D)[] = [];

    constructor(
        factories: Factories,
        model: ModelParamSignature<C, D, T>,
        emptyModel: ModelParamSignature<C, D, T>,
        data: T[]
    ) {
        super(data);
        this.model = model;
        this.emptyModel = emptyModel;
        this.factories = factories;
    }

    getModel(key: string): C | D {
        const data = super.get(key);

        if (data) {
            let instance = this.instances.find(item => item.index === key);

            if (!instance) {
                // eslint-disable-next-line new-cap
                instance = new this.model(this.factories, data);
                this.instances.push(instance);
                instance.initialize();
            }

            return instance;
        }

        // eslint-disable-next-line new-cap
        return new this.emptyModel(this.factories);
    }

    getModels(keys: string[]): (C | D)[] {
        return keys.map(key => this.getModel(key));
    }

    getAllModels(): C[] {
        return this.data.map(item => this.getModel(item.index)) as C[];
    }
}

export default ModelFactory;
