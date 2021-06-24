import { Power as PowerType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player } from "../../enum";
import PlayerModel from "./player";
import EmptyPlayerModel from "./emptyPlayer";

class Power extends Model<PowerType> {
    modifier: ModifierType = ModifierType.Power;
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

    get flavor(): string | undefined {
        return this.data?.flavor;
    }

    get owner(): PlayerModel | EmptyPlayerModel {
        return this._owner;
    }

    get player(): Player {
        return Player.Killer;
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            super.initialize();
        }
    }

    protected setOwner(owner: string): void {
        if (owner) {
            this._owner = this.factories.killer.getModel(owner);
        }
    }
}

export default Power;
