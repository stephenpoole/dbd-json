import { Item } from "../types";
import ItemModel from "./model/item";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { ItemType } from "../enum";
declare class ItemFactory extends ModelFactory<ItemModel, Item> {
    constructor(data: Item[], factories: Factories);
    typeExists(key: ItemType): boolean;
}
export default ItemFactory;
