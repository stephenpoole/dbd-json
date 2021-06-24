import Factories from "../../factories";
import { BaseEntity } from "../../types";

class Model<T extends BaseEntity> {
    data: T;
    factories: Factories;
    initialized = false;
    frozen = false;

    constructor(factories: Factories, data?: T) {
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
        this.factories = factories;
    }

    initialize(): void {
        this.initialized = true;
    }

    freeze(): void {
        this.frozen = true;
    }

    get index(): string {
        return this.data.index;
    }

    get isEmpty(): boolean {
        return !("index" in this.data && !!this.data.index && this.data.index.length > 0);
    }
}

export default Model;
