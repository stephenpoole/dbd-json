import { Player as PlayerType } from "../../types";
import Model from "../base/model";
import { Difficulty, ModifierType, Player as PlayerEnum } from "../../enum";
import Factories from "../../../lib/factories";

class EmptyPlayer extends Model<PlayerType> {
    constructor(factories: Factories) {
        super(factories, {} as unknown as PlayerType);
    }

    modifier: ModifierType = ModifierType.Player;
    id = undefined;
    name = undefined;
    description = undefined;
    image = undefined;
    difficulty: Difficulty = Difficulty.None;
    perks = [undefined, undefined, undefined];
    power = undefined;
    player = PlayerEnum.None;
}

export default EmptyPlayer;
