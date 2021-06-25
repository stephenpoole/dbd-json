import { Addon as AddonType } from "../../types";
import { ItemType, ModifierType, Player, Rarity } from "../../enum";
import Model from "../base/model";
import PlayerModel from "./player";
import EmptyPlayerModel from "./emptyPlayer";
import Factories from "../../../lib/factories";

class Addon extends Model<AddonType> {
    modifier: ModifierType = ModifierType.Addon;
    owner: PlayerModel | EmptyPlayerModel = new EmptyPlayerModel(this.factories);
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    flavor: string | undefined;
    type!: ItemType;
    rarity!: Rarity;
    player!: Player;

    constructor(factories: Factories, data: AddonType) {
        super(factories, data);
        this.assign();
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            this.assign();
            super.initialize();
        }
    }

    protected assign(): void {
        const { id, index, name, description, image, rarity, flavor, type } = this.data;
        this.id = id;
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = image;
        this.rarity = rarity;
        this.flavor = flavor;
        this.type = typeof type !== "undefined" ? type : ItemType.None;

        const power = this.owner.data.power;
        const hasPower = typeof power === "string" && power.length > 0;
        this.player = hasPower ? Player.Killer : Player.Survivor;
    }

    protected setOwner(owner: string | undefined): void {
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

export default Addon;
