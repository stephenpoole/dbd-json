import Factories from "../../factories";
import { BaseEntity } from "../../types";
declare class Model<T extends BaseEntity> {
    data: T;
    factories: Factories;
    initialized: boolean;
    frozen: boolean;
    constructor(factories: Factories, data?: T);
    initialize(): void;
    freeze(): void;
    get index(): string;
    get isEmpty(): boolean;
}
export default Model;
