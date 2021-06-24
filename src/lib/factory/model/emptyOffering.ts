import { Offering as OfferingType } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity } from "../../enum";

class EmptyOffering extends Model<OfferingType> {
    modifier: ModifierType = ModifierType.Offering;

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

export default EmptyOffering;
