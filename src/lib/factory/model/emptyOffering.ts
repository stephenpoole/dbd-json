import { Offering as OfferingType } from "../../types";
import Model from "../base/model";
import { ModifierType, Rarity } from "../../enum";
import Factories from "../../../lib/factories";

class EmptyOffering extends Model<OfferingType> {
    constructor(factories: Factories) {
        super(factories, {} as unknown as OfferingType);
    }

    modifier: ModifierType = ModifierType.Offering;
    id = undefined;
    name = undefined;
    description = undefined;
    image = undefined;
    rarity: Rarity = Rarity.None;
    flavor = undefined;
}

export default EmptyOffering;
