import { Item as ItemTypeModel } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity, ItemType } from "../../enum";
import Factories from "../../../lib/factories";

class Item extends Model<ItemTypeModel> {
    modifier: ModifierType = ModifierType.Item;
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    type!: ItemType;
    rarity!: Rarity;
    flavor: string | undefined;

    constructor(factories: Factories, data: ItemTypeModel) {
        super(factories, data);
        this.assign();
    }

    protected assign(): void {
        const { id, name, description, image, type, rarity, flavor } = this.data;
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.type = type;
        this.rarity = rarity;
        this.flavor = flavor;
    }
}

export default Item;
