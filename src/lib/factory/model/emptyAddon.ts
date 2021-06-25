import { Addon as AddonType } from "../../types";
import { ItemType, ModifierType, Player, Rarity } from "../../enum";
import Model from "../base/model";
import Factories from "../../../lib/factories";

class EmptyAddon extends Model<AddonType> {
    constructor(factories: Factories) {
        super(factories, {} as unknown as AddonType);
    }

    modifier: ModifierType = ModifierType.Addon;
    id = undefined;
    name = undefined;
    description = undefined;
    image = undefined;
    rarity: Rarity = Rarity.None;
    flavor = undefined;
    type: ItemType = ItemType.None;
    owner = undefined;
    player: Player = Player.None;
}

export default EmptyAddon;
