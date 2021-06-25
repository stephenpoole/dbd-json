import { Player as PlayerType } from "../../types";
import Model from "../base/model";
import { Difficulty, ModifierType, Player as PlayerEnum } from "../../enum";
import PerkModel from "./perk";
import EmptyPerkModel from "./emptyPerk";
import PowerModel from "./power";
import EmptyPowerModel from "./emptyPower";
import Factories from "../../../lib/factories";

class Player extends Model<PlayerType> {
    modifier: ModifierType = ModifierType.Player;
    perks: (PerkModel | EmptyPerkModel)[] = [
        new EmptyPerkModel(this.factories),
        new EmptyPerkModel(this.factories),
        new EmptyPerkModel(this.factories),
    ];

    power: PowerModel | EmptyPowerModel = new EmptyPowerModel(this.factories);
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    player!: PlayerEnum;
    difficulty!: Difficulty;

    constructor(factories: Factories, data: PlayerType) {
        super(factories, data);
        this.assign();
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setPerks(this.data.perks);
            this.setPower(this.data.power);
            super.initialize();
        }
    }

    protected assign(): void {
        const { id, index, name, description, image, difficulty } = this.data;
        this.id = id;
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = image;
        this.difficulty = difficulty;

        const power = this.data.power;
        const hasPower = typeof power === "string" && power.length > 0;
        this.player = hasPower ? PlayerEnum.Killer : PlayerEnum.Survivor;
    }

    protected setPerks(perks: string[]): void {
        const { killerPerk, survivorPerk } = this.factories;
        this.perks = perks.map(value =>
            this.player === PlayerEnum.Killer
                ? (killerPerk.getModel(value, 1) as PerkModel)
                : (survivorPerk.getModel(value, 1) as PerkModel)
        );
    }

    protected setPower(power: string | undefined): void {
        if (power) {
            const { power: factory } = this.factories;
            this.power =
                this.player === PlayerEnum.Killer
                    ? (factory.getModel(power, 1) as PowerModel)
                    : new EmptyPowerModel(this.factories);
        }
    }
}

export default Player;
