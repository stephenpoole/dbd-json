import { Power as PowerType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player } from "../../enum";
import Factories from "../../../lib/factories";

class EmptyPower extends Model<PowerType> {
    constructor(factories: Factories) {
        super(factories, {} as unknown as PowerType);
    }

    modifier: ModifierType = ModifierType.Power;
    id = undefined;
    name = undefined;
    description = undefined;
    image = undefined;
    flavor = undefined;
    owner = undefined;
    player = Player.None;
}

export default EmptyPower;
