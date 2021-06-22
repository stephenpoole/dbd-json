import { Item as ItemType } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity } from "../../enum";
declare class Item extends Model<ItemType> {
    modifier: ModifierType;
    get id(): number;
    get index(): string;
    get name(): string;
    get description(): string;
    get image(): string;
    get rarity(): Rarity;
    get flavor(): string | undefined;
}
export default Item;
