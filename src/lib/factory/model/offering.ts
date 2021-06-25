import { Offering as OfferingType } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity } from "../../enum";
import Factories from "../../../lib/factories";

class Offering extends Model<OfferingType> {
    modifier: ModifierType = ModifierType.Offering;
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    rarity!: Rarity;
    flavor: string | undefined;

    constructor(factories: Factories, data: OfferingType) {
        super(factories, data);
        this.assign();
    }

    protected assign(): void {
        const { id, name, description, image, rarity, flavor } = this.data;
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.rarity = rarity;
        this.flavor = flavor;
    }
}

export default Offering;
