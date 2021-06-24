import { Item } from "../types";
import ItemModel from "./model/item";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
import { ItemType } from "../enum";
import EmptyItemModel from "./model/emptyItem";

class ItemFactory extends ModelFactory<ItemModel, EmptyItemModel, Item> {
    constructor(data: Item[], factories: Factories) {
        super(factories, ItemModel, EmptyItemModel, data);
    }

    typeExists(key: ItemType): boolean {
        return !!this.data.find(item => item.type === key);
    }
}

export default ItemFactory;
