import { BaseEntity } from "../../types";
declare class Factory<T extends BaseEntity> {
    data: T[];
    constructor(data: T[]);
    get(key: string): T | undefined;
    exists(key: string): boolean;
}
export default Factory;
