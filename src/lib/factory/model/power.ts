import { Power as PowerType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player } from "../../enum";
import PlayerModel from "./player";
import EmptyPlayerModel from "./emptyPlayer";
import Factories from "../../../lib/factories";

class Power extends Model<PowerType> {
    modifier: ModifierType = ModifierType.Power;
    owner: PlayerModel | EmptyPlayerModel = new EmptyPlayerModel(this.factories);
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    flavor: string | undefined;
    player = Player.Killer;

    constructor(factories: Factories, data: PowerType) {
        super(factories, data);
        this.assign();
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            super.initialize();
        }
    }

    protected assign(): void {
        const { id, index, name, description, image, flavor } = this.data;
        this.id = id;
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = image;
        this.flavor = flavor;
    }

    protected setOwner(owner: string): void {
        if (owner) {
            this.owner = this.factories.killer.getModel(owner);
        }
    }
}

export default Power;
