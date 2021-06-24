import { Item as ItemTypeModel } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity, ItemType } from "../../enum";

class Item extends Model<ItemTypeModel> {
    modifier: ModifierType = ModifierType.Item;

    get id(): number {
        return this.data.id;
    }

    get index(): string {
        return this.data.index;
    }

    get name(): string {
        return this.data.name;
    }

    get description(): string {
        return this.data.description;
    }

    get image(): string {
        return this.data.image;
    }

    get type(): ItemType {
        return this.data.type;
    }

    get rarity(): Rarity {
        return this.data.rarity;
    }

    get flavor(): string | undefined {
        return this.data?.flavor;
    }
}

export default Item;
