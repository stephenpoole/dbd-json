import { BaseEntity } from "../../types";

class Factory<T extends BaseEntity> {
    data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    get(key: string): T | undefined {
        const item = this.data.find(value => value.index === key);
        return item;
    }

    exists(key: string): boolean {
        return !!this.get(key);
    }
}

export default Factory;
