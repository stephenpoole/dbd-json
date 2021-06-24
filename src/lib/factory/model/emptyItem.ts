import { Item as ItemTypeModel } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity, ItemType } from "../../enum";

class EmptyItem extends Model<ItemTypeModel> {
    modifier: ModifierType = ModifierType.Item;

    get id(): undefined {
        return undefined;
    }

    get index(): undefined {
        return undefined;
    }

    get name(): undefined {
        return undefined;
    }

    get description(): undefined {
        return undefined;
    }

    get image(): undefined {
        return undefined;
    }

    get type(): ItemType {
        return ItemType.Empty;
    }

    get rarity(): Rarity {
        return Rarity.None;
    }

    get flavor(): undefined {
        return undefined;
    }

    get isEmpty(): boolean {
        return true;
    }
}

export default EmptyItem;
