import Factories from "../../factories";
import { BaseEntity } from "../../types";
import Factory from "./factory";
import Model from "./model";

type ModelParamSignature<C extends Model<T>, T extends BaseEntity> = new (
    factories: Factories,
    data: T
) => C;

type EmptyModelParamSignature<D extends Model<Partial<T>>, T extends Partial<BaseEntity>> = new (
    factories: Factories,
    data: T
) => D;

class ModelFactory<
    C extends Model<T>,
    D extends Model<T>,
    T extends BaseEntity
> extends Factory<T> {
    model: ModelParamSignature<C, T>;
    emptyModel: EmptyModelParamSignature<D, T>;
    factories: Factories;
    instances: (C | D)[] = [];

    constructor(
        factories: Factories,
        model: ModelParamSignature<C, T>,
        emptyModel: ModelParamSignature<D, T>,
        data: T[]
    ) {
        super(data);
        this.model = model;
        this.emptyModel = emptyModel;
        this.factories = factories;
    }

    getModel(key: string, depth = 0): C | D {
        const data = super.get(key);

        if (data) {
            let instance;
            if (depth === 0) {
                // eslint-disable-next-line new-cap
                instance = new this.model(this.factories, data);
                instance.initialize();
                return instance;
            }

            instance = this.instances.find(item => item.index === key);
            if (!instance) {
                // eslint-disable-next-line new-cap
                instance = new this.model(this.factories, data);
                this.instances.push(instance);
                instance.initialize();
            }
            return instance;
        }

        // eslint-disable-next-line new-cap
        const instance = new this.emptyModel(this.factories, {} as unknown as T);
        instance.initialize();
        return instance;
    }

    getRandomModel(): C {
        const data = this.random();
        // eslint-disable-next-line new-cap
        const instance = new this.model(this.factories, data);
        instance.initialize();
        return instance;
    }

    getModels(keys: string[]): C[] {
        return keys.map(key => this.getModel(key) as C);
    }

    getAllModels(): C[] {
        return this.data.map(item => this.getModel(item.index)) as C[];
    }
}

export default ModelFactory;
