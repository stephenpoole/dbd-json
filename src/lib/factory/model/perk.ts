import { Perk as PerkType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player, Rarity } from "../../enum";
import PlayerModel from "./player";
import EmptyPlayerModel from "./emptyPlayer";
import Factories from "../../../lib/factories";

class Perk extends Model<PerkType> {
    modifier: ModifierType = ModifierType.Perk;
    owner: PlayerModel | EmptyPlayerModel = new EmptyPlayerModel(this.factories);
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    flavor: string | undefined;
    rarity!: Rarity;
    player!: Player;
    tier!: number;

    constructor(factories: Factories, data: PerkType) {
        super(factories, data);
        this.assign(3);
    }

    setTier(tier: number): void {
        this.assign(tier);
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            super.initialize();
        }
    }

    protected assign(tier: number): void {
        const { id, index, name, description, image, rarity, flavor, tiers } = this.data;
        this.id = id;
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = image;
        this.flavor = flavor;
        if (tier < 1) {
            this.tier = 1;
        } else if (tier > rarity.length) {
            this.tier = rarity.length;
        } else {
            this.tier = tier;
        }
        this.rarity = rarity[this.tier - 1];

        const isKiller = this.factories.killer.exists(this.index);
        this.player = isKiller ? Player.Killer : Player.Survivor;
        this.description = description
            .split(/\{[0-9]{1,2}\}/g)
            .reduce<string>((prev, current, index, arr) => {
                const isLastIndex = index === arr.length - 1;
                if (isLastIndex) {
                    return `${prev}${current}`;
                }
                return `${prev}${current}${tiers[this.tier - 1][index]}`;
            }, "");
    }

    protected setOwner(owner: string): void {
        if (owner) {
            const { killer, survivor } = this.factories;
            const isKiller = killer.exists(owner);

            if (isKiller) {
                this.owner = killer.getModel(owner);
            } else {
                this.owner = survivor.getModel(owner);
            }
        }
    }
}

export default Perk;
