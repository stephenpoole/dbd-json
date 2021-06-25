import Factories from "../../factories";
import { BaseEntity } from "../../types";

class Model<T extends BaseEntity | Partial<BaseEntity>> {
    data: T;
    factories: Factories;
    initialized = false;
    frozen = false;
    index: string;

    constructor(factories: Factories, data: T) {
        if (data) {
            this.data = data;
        } else {
            this.data = {
                id: -1,
                index: "",
                name: "",
                description: "",
                image: "",
            } as T;
        }
        this.index = this.data.index!;
        this.factories = factories;
    }

    initialize(): void {
        this.initialized = true;
    }

    get isEmpty(): boolean {
        return !("index" in this.data && !!this.data.index && this.data.index.length > 0);
    }
}

export default Model;
