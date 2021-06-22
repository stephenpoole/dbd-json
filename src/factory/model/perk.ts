import { Perk as PerkType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player, Rarity } from "../../enum";
import PlayerModel from "./player";

class Perk extends Model<PerkType> {
    modifier: ModifierType = ModifierType.Perk;
    protected _owner: PlayerModel | undefined;
    protected _tierIndex = 2;

    get id(): number {
        return this.data.id;
    }

    get index(): string {
        return this.data.index;
    }

    get name(): string {
        return this.data.name;
    }

    get image(): string {
        return this.data.image;
    }

    get flavor(): string | undefined {
        return this.data.flavor;
    }

    get owner(): PlayerModel | undefined {
        if (this._owner) {
            return this._owner;
        }
        return undefined;
    }

    get player(): Player {
        const isKiller = this.factories.killer.exists(this.index);
        if (isKiller) {
            return Player.Killer;
        }

        return Player.Survivor;
    }

    get tier(): number {
        return this._tierIndex + 1;
    }

    get rarity(): Rarity {
        return this.data.rarity[this._tierIndex];
    }

    get description(): string {
        return this.data.description
            .split(/\{[0-9]{1,2}\}/g)
            .reduce<string>((prev, current, index, arr) => {
                const isLastIndex = index === arr.length - 1;
                if (isLastIndex) {
                    return `${prev}${current}`;
                }
                return `${prev}${current}${this.data.tiers[this._tierIndex][index]}`;
            }, "");
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            super.initialize();
        }
    }

    setTier(tier: number): void {
        const index = tier - 1;
        const max = this.data.rarity.length - 1;
        if (index >= 0 && index <= max) {
            this._tierIndex = tier - 1;
        }
    }

    protected setOwner(owner: string): void {
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

export default Perk;
