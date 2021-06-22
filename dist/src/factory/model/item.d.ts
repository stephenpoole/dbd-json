import { Item as ItemTypeModel } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity, ItemType } from "../../enum";
declare class Item extends Model<ItemTypeModel> {
    modifier: ModifierType;
    get id(): number;
    get index(): string;
    get name(): string;
    get description(): string;
    get image(): string;
    get type(): ItemType;
    get rarity(): Rarity;
    get flavor(): string | undefined;
}
export default Item;
