import { BaseEntity } from "../../types";

class Factory<T extends BaseEntity> {
    data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    get(key: string): T | undefined {
        let item = this.data.find(value => value.index === key);
        if (item) {
            return item;
        }

        const lowerCaseKey = key.toLowerCase();
        item = this.data.find(value => value.name.toLowerCase() === lowerCaseKey);
        return item;
    }

    exists(key: string): boolean {
        return !!this.get(key);
    }
}

export default Factory;
