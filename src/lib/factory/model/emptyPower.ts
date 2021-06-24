import { Power as PowerType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player } from "../../enum";
import PlayerModel from "./player";

class EmptyPower extends Model<PowerType> {
    modifier: ModifierType = ModifierType.Power;
    protected _owner: PlayerModel | undefined;

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

    get flavor(): undefined {
        return undefined;
    }

    get owner(): undefined {
        return undefined;
    }

    get player(): Player {
        return Player.None;
    }
}

export default EmptyPower;
