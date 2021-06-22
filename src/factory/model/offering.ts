import { Offering as OfferingType } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity } from "../../enum";

class Offering extends Model<OfferingType> {
    modifier: ModifierType = ModifierType.Offering;

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

    get rarity(): Rarity {
        return this.data.rarity;
    }

    get flavor(): string | undefined {
        return this.data.flavor;
    }
}

export default Offering;
