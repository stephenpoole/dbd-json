import { Perk as PerkType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player, Rarity } from "../../enum";
import Factories from "../../../lib/factories";

class EmptyPerk extends Model<PerkType> {
    constructor(factories: Factories) {
        super(factories, {} as unknown as PerkType);
    }

    modifier: ModifierType = ModifierType.Perk;
    id = undefined;
    name = undefined;
    image = undefined;
    flavor = undefined;
    owner = undefined;
    player: Player = Player.None;
    tier = 3;
    rarity: Rarity = Rarity.None;
    description = undefined;
}

export default EmptyPerk;
