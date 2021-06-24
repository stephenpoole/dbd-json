import { Addon as AddonType } from "../../types";
import { ItemType, ModifierType, Player, Rarity } from "../../enum";
import Model from "../base/model";
import PlayerModel from "./player";
import EmptyPlayerModel from "./emptyPlayer";

class Addon extends Model<AddonType> {
    modifier: ModifierType = ModifierType.Addon;
    protected _owner: PlayerModel | EmptyPlayerModel = new EmptyPlayerModel(this.factories);

    get id(): number {
        return this.data.id;
    }

    get index(): string {
        return this.data.index;
    }

    get name(): string {
        return this.data.name;
    }

    get description(): string {
        return this.data.description;
    }

    get image(): string {
        return this.data.image;
    }

    get rarity(): Rarity {
        return this.data.rarity;
    }

    get flavor(): string | undefined {
        return this.data?.flavor;
    }

    get type(): ItemType {
        return typeof this.data.type !== "undefined" ? this.data.type : ItemType.Empty;
    }

    get owner(): PlayerModel | EmptyPlayerModel {
        return this._owner;
    }

    get player(): Player {
        if (this._owner) {
            const power = this._owner.data.power;
            const hasPower = typeof power === "string" && power.length > 0;
            if (hasPower) {
                return Player.Killer;
            }
        }

        return Player.Survivor;
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            super.initialize();
        }
    }

    protected setOwner(owner: string | undefined): void {
        if (owner) {
            const { killer, survivor } = this.factories;
            const isKiller = killer.exists(owner);

            if (isKiller) {
                this._owner = killer.getModel(owner);
            } else {
                this._owner = survivor.getModel(owner);
            }
        }
    }
}

export default Addon;
