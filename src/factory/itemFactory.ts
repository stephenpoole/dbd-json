import { Item } from "../types";
import ItemModel from "./model/item";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { ItemType } from "../enum";

class ItemFactory extends ModelFactory<ItemModel, Item> {
    constructor(data: Item[], factories: Factories) {
        super(factories, ItemModel, data);
    }

    typeExists(key: ItemType): boolean {
        return !!this.data.find(item => item.type === key);
    }
}

export default ItemFactory;
