import { Addon as AddonType } from "../../types";
import { ItemType, ModifierType, Player, Rarity } from "../../enum";
import Model from "../base/model";
import PlayerModel from "./player";

class EmptyAddon extends Model<AddonType> {
    modifier: ModifierType = ModifierType.Addon;
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

    get rarity(): Rarity {
        return Rarity.None;
    }

    get flavor(): undefined {
        return undefined;
    }

    get type(): ItemType {
        return ItemType.Empty;
    }

    get owner(): undefined {
        return undefined;
    }

    get player(): Player {
        return Player.None;
    }

    get isEmpty(): boolean {
        return true;
    }
}

export default EmptyAddon;
