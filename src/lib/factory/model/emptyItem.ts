import { Item as ItemTypeModel } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity, ItemType } from "../../enum";
import Factories from "../../../lib/factories";

class EmptyItem extends Model<ItemTypeModel> {
    constructor(factories: Factories) {
        super(factories, {} as unknown as ItemTypeModel);
    }

    modifier: ModifierType = ModifierType.Item;
    id = undefined;
    name = undefined;
    description = undefined;
    image = undefined;
    type: ItemType = ItemType.None;
    rarity: Rarity = Rarity.None;
    flavor = undefined;
}

export default EmptyItem;
