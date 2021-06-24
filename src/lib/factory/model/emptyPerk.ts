import { Perk as PerkType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player, Rarity } from "../../enum";

class EmptyPerk extends Model<PerkType> {
    modifier: ModifierType = ModifierType.Perk;
    protected _tierIndex = 2;

    get id(): undefined {
        return undefined;
    }

    get index(): undefined {
        return undefined;
    }

    get name(): undefined {
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

    get tier(): number {
        return this._tierIndex + 1;
    }

    get rarity(): Rarity {
        return Rarity.None;
    }

    get description(): undefined {
        return undefined;
    }

    get isEmpty(): boolean {
        return true;
    }
}

export default EmptyPerk;
