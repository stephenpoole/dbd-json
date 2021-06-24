import { Player as PlayerType } from "../../types";
import Model from "../base/model";
import { Difficulty, ModifierType, Player as PlayerEnum } from "../../enum";

class EmptyPlayer extends Model<PlayerType> {
    modifier: ModifierType = ModifierType.Player;

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

    get difficulty(): Difficulty {
        return this.data.difficulty;
    }

    get perks(): undefined[] {
        return [];
    }

    get power(): undefined {
        return undefined;
    }

    get player(): PlayerEnum {
        return PlayerEnum.None;
    }
}

export default EmptyPlayer;
