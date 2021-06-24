import Factories from "../../factories";
import { BaseEntity } from "../../types";
import Factory from "./factory";
import Model from "./model";

type ModelParamSignature<C extends Model<T>, T extends BaseEntity> = new (
    factories: Factories,
    data?: T
) => C;

class ModelFactory<C extends Model<T>, T extends BaseEntity> extends Factory<T> {
    model: ModelParamSignature<C, T>;
    factories: Factories;
    instances: C[] = [];

    constructor(factories: Factories, model: ModelParamSignature<C, T>, data: T[]) {
        super(data);
        this.model = model;
        this.factories = factories;
    }

    getModel(key: string): C {
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
        return new this.model(this.factories);
    }

    getModels(keys: string[]): C[] {
        return keys.map(key => this.getModel(key));
    }

    getAllModels(): C[] {
        return this.data.map(item => this.getModel(item.index));
    }
}

export default ModelFactory;
